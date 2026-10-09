import { parseSync, rawTransferSupported } from "oxc-parser";
import type { Program } from "yuku-parser";

// Oxc's experimentalLazy API exposes read-only Rust shapes, not ESTree. This
// adapter caches each accessed field in a writable JS view. It never decodes the
// complete program at construction time and does not mutate the native buffer.
type RecordValue = Record<string, any>;

export interface LazyEstreeMetrics {
  wrappedNodes: number;
  fallbackParses: number;
  fallbackSourceCodeUnits: number;
}

const omittedFields = new Set([
  "typeParameters", "typeArguments", "returnType", "typeAnnotation", "declare",
  "definite", "accessibility", "abstract", "override", "readonly", "optional",
  "importKind", "exportKind", "implements", "superTypeArguments",
]);
const renamedTypes: Record<string, string> = {
  IdentifierName: "Identifier", IdentifierReference: "Identifier",
  BindingIdentifier: "Identifier", LabelIdentifier: "Identifier",
  ObjectProperty: "Property", BindingProperty: "Property",
  ComputedMemberExpression: "MemberExpression", StaticMemberExpression: "MemberExpression",
  PrivateFieldExpression: "MemberExpression", FunctionBody: "BlockStatement",
  ArrayAssignmentTarget: "ArrayPattern", ObjectAssignmentTarget: "ObjectPattern",
  AssignmentTargetWithDefault: "AssignmentPattern", BindingRestElement: "RestElement",
  AssignmentTargetRest: "RestElement", ExportDeclaration: "ExportNamedDeclaration",
  ExportFromDeclaration: "ExportNamedDeclaration",
  AssignmentTargetPropertyIdentifier: "Property", AssignmentTargetPropertyProperty: "Property",
};
const fieldNames = new WeakMap<object, string[]>();

function nativeFields(value: RecordValue): string[] {
  const prototype = Object.getPrototypeOf(value);
  let fields = fieldNames.get(prototype);
  if (!fields) {
    fields = Object.entries(Object.getOwnPropertyDescriptors(prototype))
      .filter(([, descriptor]) => descriptor.get)
      .map(([name]) => name);
    fieldNames.set(prototype, fields);
  }
  return fields;
}

function shiftOffsets(value: any, offset: number): void {
  if (!value || typeof value !== "object") return;
  if (typeof value.start === "number") value.start += offset;
  if (typeof value.end === "number") value.end += offset;
  for (const key of Object.keys(value)) {
    if (key !== "start" && key !== "end") shiftOffsets(value[key], offset);
  }
}

/** A mutable ESTree view whose lifetime ends at dispose(); use try/finally. */
export function parseLazyEstree(
  filename: string,
  source: string,
  metrics?: LazyEstreeMetrics,
): { program: Program; errors: readonly { message: string }[]; dispose(): void } {
  if (!rawTransferSupported()) throw new Error("OXC experimentalLazy is not supported on this platform");
  // Setting experimentalRawTransfer here would take precedence and silently
  // bypass experimentalLazy in Oxc's entry point.
  const parsed = parseSync(filename, source, {
    experimentalLazy: true, lang: "jsx", sourceType: "module",
  } as never) as unknown as { program: RecordValue; errors: { message: string }[]; dispose(): void };
  const cache = new WeakMap<object, any>();
  let disposed = false;
  let byteOffsets: Uint32Array | null | undefined;
  const utf16Offset = (byteOffset: number) => {
    if (byteOffsets === undefined) {
      byteOffsets = null;
      if (/[^\x00-\x7f]/.test(source)) {
        byteOffsets = new Uint32Array(Buffer.byteLength(source) + 1);
        let byte = 0;
        for (let index = 0; index < source.length;) {
          const codePoint = source.codePointAt(index)!;
          const width = codePoint > 0xffff ? 2 : 1;
          const bytes = Buffer.byteLength(source.slice(index, index + width));
          for (let i = 0; i < bytes; i++) byteOffsets[byte++] = index;
          index += width;
        }
        byteOffsets[byte] = source.length;
      }
    }
    return byteOffsets ? byteOffsets[byteOffset]! : byteOffset;
  };
  const assertAlive = () => {
    if (disposed) throw new Error("OXC lazy ESTree has been disposed");
  };
  const lazy = (target: RecordValue, key: string, read: () => any) => {
    Object.defineProperty(target, key, {
      configurable: true, enumerable: true,
      get() {
        assertAlive();
        const value = read();
        Object.defineProperty(target, key, { configurable: true, enumerable: true, writable: true, value });
        return value;
      },
      set(value) {
        assertAlive();
        Object.defineProperty(target, key, { configurable: true, enumerable: true, writable: true, value });
      },
    });
  };

  // The public lazy API currently omits directives, rest elements and class
  // superclasses, and leaves encoded lone surrogates in literal values. Recover
  // only these fragments, on demand, through the public parser. This extra
  // parsing is intentionally inside the measured adapter workload.
  const fragment = (text: string, offset: number): RecordValue => {
    const parseFragment = (input: string) => {
      if (metrics) {
        metrics.fallbackParses++;
        metrics.fallbackSourceCodeUnits += input.length;
      }
      return parseSync(filename, input, { lang: "jsx", sourceType: "module" });
    };
    let result = parseFragment(text);
    let wrapped = false;
    if (result.errors.length) {
      // A fragment taken from a generator/function can contain yield or
      // new.target, which is invalid at module scope. Retry in a permissive
      // async-generator context, preserving the fragment's original offsets.
      // Both attempts remain measured; the complete source is never reparsed.
      const prefix = "async function* __lazy_context__(){\n";
      result = parseFragment(`${prefix}${text}\n}`);
      offset -= prefix.length;
      wrapped = true;
    }
    if (result.errors.length) throw new Error(`OXC lazy ESTree fragment failed: ${result.errors[0]!.message}`);
    const program = result.program as unknown as RecordValue;
    shiftOffsets(program, offset);
    return wrapped ? { body: program.body[0].body.body } : program;
  };
  const body = (native: RecordValue): RecordValue[] => {
    const statements = wrap(native.body) as RecordValue[];
    const start = native.type === "Program" ? 0 : native.start + 1;
    const end = statements[0]?.start ?? (native.type === "Program" ? native.end : native.end - 1);
    const prefix = source.slice(start, end);
    if (!/["']/.test(prefix)) return statements;
    return [...fragment(prefix, start).body, ...statements];
  };
  const appendMissingRest = (native: RecordValue, items: any[], kind: "params" | "properties" | "elements") => {
    // FormalParameters is an internal wrapper omitted from ESTree; Oxc's span
    // conversion leaves this wrapper in UTF-8 even though child spans are UTF-16.
    const start = kind === "params" ? utf16Offset(native.start) : native.start;
    const end = kind === "params" ? utf16Offset(native.end) : native.end;
    const last = items.findLast((item) => item !== null);
    if (!source.slice(last?.end ?? start, end).includes("...")) return items;
    const text = source.slice(start, end);
    const assignment = /AssignmentTarget$/.test(native.constructor.name);
    const prefix = kind === "params" ? "function __lazy__" : assignment ? "(" : "const ";
    const suffix = kind === "params" ? "{}" : assignment ? " = __lazy__);" : " = __lazy__;";
    const recovered = fragment(prefix + text + suffix, start - prefix.length).body[0];
    const fullItems = kind === "params" ? recovered.params : assignment
      ? recovered.expression.expression.left[kind] : recovered.declarations[0].id[kind];
    const rest = fullItems.at(-1);
    if (rest?.type === "RestElement") items.push(rest);
    return items;
  };
  const jsxName = (native: RecordValue) => {
    const result = wrap(native);
    if (result.type === "Identifier") result.type = "JSXIdentifier";
    if (result.type === "ThisExpression") { result.type = "JSXIdentifier"; result.name = "this"; }
    return result;
  };
  function wrap(value: any): any {
    if (value === null || typeof value !== "object") return value;
    const cached = cache.get(value);
    if (cached !== undefined) return cached;
    if (Array.isArray(value)) {
      const array: any[] = [];
      cache.set(value, array);
      for (let index = 0; index < value.length; index++) array.push(wrap(value[index]));
      return array;
    }
    const kind = value.constructor.name;
    if (kind === "Elision") return null;
    if (kind === "SourceType") return value.sourceType;
    if (kind === "CatchParameter") {
      const result = wrap(value.pattern);
      cache.set(value, result);
      return result;
    }
    if (kind === "FormalParameters") {
      const result = appendMissingRest(value, wrap(value.items), "params");
      cache.set(value, result);
      return result;
    }
    if (kind === "FormalParameter" && value.initializer === null) {
      const result = wrap(value.pattern);
      cache.set(value, result);
      return result;
    }
    const result: RecordValue = {};
    cache.set(value, result);
    if (metrics) metrics.wrappedNodes++;
    const nativeType = value.type;
    if (nativeType !== undefined) result.type = renamedTypes[nativeType] ?? nativeType;
    for (const key of nativeFields(value)) {
      if (key === "type" || (omittedFields.has(key) && !(key === "optional" && /(?:MemberExpression|FieldExpression|CallExpression)/.test(kind)))) continue;
      lazy(result, key, () => wrap(value[key]));
    }
    if (kind === "Program") {
      lazy(result, "sourceType", () => value.sourceType.sourceType);
      lazy(result, "body", () => body(value));
    } else if (kind === "FunctionBody") {
      lazy(result, "body", () => body(value));
    } else if (kind === "Function") {
      result.expression = false;
    } else if (kind === "Class") {
      lazy(result, "superClass", () => {
        const header = source.slice(value.start, value.body.start);
        if (!header.includes("extends")) return null;
        return fragment(`(${header}{})`, value.start - 1).body[0].expression.expression.superClass;
      });
    } else if (kind === "ArrowFunctionExpression") {
      result.id = null;
      result.generator = false;
      lazy(result, "expression", () => value.body.type !== "FunctionBody");
    } else if (kind === "FormalParameter") {
      result.type = "AssignmentPattern";
      delete result.pattern;
      delete result.initializer;
      delete result.decorators;
      lazy(result, "left", () => wrap(value.pattern));
      lazy(result, "right", () => wrap(value.initializer));
    } else if (["StaticMemberExpression", "ComputedMemberExpression", "PrivateFieldExpression"].includes(kind)) {
      result.computed = kind === "ComputedMemberExpression";
    } else if (kind === "BindingProperty") {
      result.kind = "init";
      result.method = false;
    } else if (kind === "TemplateElement") {
      lazy(result, "value", () => {
        const templateValue = wrap(value.value);
        lazy(templateValue, "cooked", () => {
          const cooked = value.value.cooked;
          if (cooked === null || !cooked.includes("\ufffd")) return cooked;
          return fragment(`__lazy__\`${value.value.raw}\``, 0).body[0].expression.quasi.quasis[0].value.cooked;
        });
        return templateValue;
      });
    } else if (kind === "ArrayPattern" || kind === "ObjectPattern") {
      const key = kind === "ArrayPattern" ? "elements" : "properties";
      lazy(result, key, () => appendMissingRest(value, wrap(value[key]), key));
    } else if (kind === "ArrayAssignmentTarget" || kind === "ObjectAssignmentTarget") {
      const key = kind === "ArrayAssignmentTarget" ? "elements" : "properties";
      lazy(result, key, () => appendMissingRest(value, wrap(value[key]), key));
    } else if (kind === "AssignmentTargetPropertyIdentifier") {
      result.kind = "init"; result.method = false; result.shorthand = true; result.computed = false;
      lazy(result, "value", () => value.value === null ? wrap(value.key) : {
        type: "AssignmentPattern", left: wrap(value.key), right: wrap(value.value), start: value.start, end: value.end,
      });
    } else if (kind === "AssignmentTargetPropertyProperty") {
      result.kind = "init"; result.method = false; result.shorthand = false;
    } else if (/^(?:Boolean|Null|Numeric|String|BigInt|RegExp)Literal$/.test(kind)) {
      result.type = "Literal";
      lazy(result, "raw", () => source.slice(value.start, value.end));
      if (kind === "NullLiteral") result.value = null;
      if (kind === "BigIntLiteral") {
        lazy(result, "bigint", () => value.value);
        lazy(result, "value", () => BigInt(value.value));
      }
      if (kind === "StringLiteral") {
        lazy(result, "value", () => {
          const text = value.value;
          // Oxc encodes lone surrogates with a replacement marker in raw strings.
          if (!text.includes("\ufffd")) return text;
          return fragment(`(${source.slice(value.start, value.end)})`, value.start - 1).body[0].expression.expression.value;
        });
      }
      if (kind === "RegExpLiteral") {
        lazy(result, "regex", () => {
          const raw = source.slice(value.start, value.end);
          const slash = raw.lastIndexOf("/");
          return { pattern: raw.slice(1, slash), flags: [...raw.slice(slash + 1)].sort().join("") };
        });
        lazy(result, "value", () => {
          try { return new RegExp(result.regex.pattern, result.regex.flags); } catch { return null; }
        });
      }
    } else if (kind === "ImportDeclaration") {
      lazy(result, "specifiers", () => wrap(value.specifiers) ?? []);
    }
    if (["ImportDeclaration", "ExportDeclaration", "ExportNamedDeclaration", "ExportFromDeclaration", "ExportAllDeclaration"].includes(kind)) {
      delete result.withClause;
      lazy(result, "attributes", () => value.withClause ? wrap(value.withClause.attributes) : []);
      if (kind === "ExportDeclaration") { result.specifiers = []; result.source = null; }
      if (kind === "ExportNamedDeclaration" || kind === "ExportFromDeclaration") result.declaration = null;
      if (kind === "ExportNamedDeclaration") result.source = null;
    }
    if (kind === "JSXOpeningElement" || kind === "JSXClosingElement") {
      lazy(result, "name", () => jsxName(value.name));
      if (kind === "JSXOpeningElement") lazy(result, "selfClosing", () => /\/\s*>$/.test(source.slice(value.start, value.end)));
    } else if (kind === "JSXMemberExpression") {
      lazy(result, "object", () => jsxName(value.object));
    } else if (kind === "JSXOpeningFragment") {
      result.attributes = []; result.selfClosing = false;
    } else if (kind === "ImportMeta" || kind === "NewTarget") {
      result.type = "MetaProperty";
      const [meta, property] = kind === "ImportMeta" ? ["import", "meta"] : ["new", "target"];
      lazy(result, "meta", () => ({ type: "Identifier", name: meta, start: value.start, end: value.start + meta.length }));
      lazy(result, "property", () => ({ type: "Identifier", name: property, start: value.end - property.length, end: value.end }));
    } else if (kind === "PrivateInExpression") {
      result.type = "BinaryExpression"; result.operator = "in";
    } else if (kind === "UnaryExpression") {
      result.prefix = true;
    }
    return result;
  }
  try {
    return {
      program: wrap(parsed.program) as Program,
      get errors() { assertAlive(); return Array.from(parsed.errors); },
      dispose() { if (!disposed) { disposed = true; parsed.dispose(); } },
    };
  } catch (error) {
    parsed.dispose();
    throw error;
  }
}
