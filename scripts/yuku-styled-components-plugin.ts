import { existsSync, readFileSync } from "node:fs";
import {
    basename,
    dirname,
    extname,
    join,
    relative,
    sep,
} from "node:path";
import picomatch from "picomatch";
import { b, bindingIdentifiers, is, walk, type Visitors } from "yuku-ast";
import type {
    ArrowFunctionExpression,
    CallExpression,
    Expression,
    Identifier,
    ImportDeclaration,
    JSXAttribute,
    JSXElement,
    JSXElementName,
    JSXOpeningElement,
    Node,
    ObjectExpression,
    ObjectProperty,
    Program,
    Property,
    StringLiteral,
    TaggedTemplateExpression,
    TemplateLiteral,
    VariableDeclaration,
    VariableDeclarator,
    WalkContext,
} from "yuku-parser";

const DEFAULT_IMPORT_PATHS = new Set([
    "styled-components",
    "styled-components/no-tags",
    "styled-components/native",
    "styled-components/primitives",
]);
const PURE_HELPERS = new Set([
    "createGlobalStyle",
    "css",
    "keyframes",
    "useTheme",
    "withTheme",
]);
const CONFIG_PROPERTY_NAMES = new Set(["componentId", "displayName"]);
const PLACEHOLDER_PATTERN = /(?:__PLACEHOLDER_(\d+)__)/g;
const PLACEHOLDER_SPLIT_PATTERN = /__PLACEHOLDER_(?:\d+)__/g;
const SYMBOL_PATTERN = /(\s*[;:{},]\s*)/g;
const TAG_NAME_PATTERN = /^[a-z][a-z\d]*(\-[a-z][a-z\d]*)?$/;
const FILE_SEARCH_DEPTH_MAX = 256;

export interface YukuStyledComponentsOptions {
    cssProp?: boolean;
    cssPropImportPath?: string;
    customImportName?: string;
    displayName?: boolean;
    fileName?: boolean;
    meaninglessFileNames?: string[];
    minify?: boolean;
    namespace?: string;
    pure?: boolean;
    ssr?: boolean;
    topLevelImportPaths?: string[];
    transpileTemplateLiterals?: boolean;
}

interface ResolvedOptions {
    cssProp: boolean;
    cssPropImportPath: string;
    customImportName: string | null;
    displayName: boolean;
    fileName: boolean;
    meaninglessFileNames: Set<string>;
    minify: boolean;
    namespace: string;
    pure: boolean;
    ssr: boolean;
    topLevelImportMatchers: Array<(value: string) => boolean>;
    transpileTemplateLiterals: boolean;
}

interface PluginState {
    aliases: Map<string, string>;
    bindingStatements: Map<string, ProgramBodyItem>;
    bindingScopes: WeakMap<Node, Set<string>>;
    componentIndex: number;
    cssIdentifierIndex: number;
    cssPropDefaultReusable: boolean;
    cssPropImportDeclaration: ImportDeclaration | null;
    defaultImportIsNamespace: boolean;
    fileHash: string;
    filename: string;
    importNames: Map<string, string>;
    options: ResolvedOptions;
    program: Program;
    styledRequired: string | null;
    topLevelBindings: Set<string>;
    usedNames: Set<string>;
}

interface PendingDeclaration {
    after: ProgramBodyItem | null;
    declaration: VariableDeclaration;
}

type ProgramBodyItem = Program["body"][number];
type CSSValue = ArrowFunctionExpression | ObjectExpression | TemplateLiteral;

function resolveOptions(options: YukuStyledComponentsOptions): ResolvedOptions {
    return {
        cssProp: options.cssProp ?? true,
        cssPropImportPath: options.cssPropImportPath ?? "styled-components",
        customImportName: options.customImportName ?? null,
        displayName: options.displayName ?? true,
        fileName: options.fileName ?? true,
        meaninglessFileNames: new Set(options.meaninglessFileNames ?? ["index"]),
        minify: options.minify ?? true,
        namespace: options.namespace ? `${options.namespace}__` : "",
        pure: options.pure ?? false,
        ssr: options.ssr ?? true,
        topLevelImportMatchers: (options.topLevelImportPaths ?? []).map(
            (pattern) => picomatch(pattern),
        ),
        transpileTemplateLiterals: options.transpileTemplateLiterals ?? true,
    };
}

function identifier(name: string): Identifier {
    return b.Identifier({ name });
}

function stringLiteral(value: string): StringLiteral {
    return b.Literal({ value, raw: JSON.stringify(value) }) as StringLiteral;
}

function property(name: string, value: string): ObjectProperty {
    return b.Property({
        computed: false,
        key: identifier(name),
        kind: "init",
        method: false,
        shorthand: false,
        value: stringLiteral(value),
    }) as ObjectProperty;
}

function staticMember(object: Expression, name: string) {
    return b.MemberExpression({
        computed: false,
        object,
        optional: false,
        property: identifier(name),
    });
}

function call(callee: Expression, arguments_: CallExpression["arguments"]): CallExpression {
    return b.CallExpression({
        arguments: arguments_,
        callee,
        optional: false,
    });
}

function isValidTopLevelImport(value: string, state: PluginState): boolean {
    if (DEFAULT_IMPORT_PATHS.has(value)) return true;
    return state.options.topLevelImportMatchers.some((matcher) => matcher(value));
}

function importedName(specifier: ImportDeclaration["specifiers"][number]): string | null {
    if (specifier.type !== "ImportSpecifier") return null;
    if (specifier.imported.type === "Identifier") return specifier.imported.name;
    return typeof specifier.imported.value === "string" ? specifier.imported.value : null;
}

function unwrapAlias(expression: Expression): Expression {
    let current = expression;
    for (let depth = 0; depth < FILE_SEARCH_DEPTH_MAX; depth++) {
        switch (current.type) {
            case "ParenthesizedExpression":
            case "TSAsExpression":
            case "TSSatisfiesExpression":
            case "TSTypeAssertion":
            case "TSNonNullExpression":
                current = current.expression;
                continue;
            default:
                return current;
        }
    }
    throw new Error("styled-components alias wrapper depth exceeded 256");
}

function collectBindingStatement(statement: ProgramBodyItem, state: PluginState): void {
    if (statement.type === "VariableDeclaration") {
        for (const declaration of statement.declarations) {
            for (const binding of bindingIdentifiers(declaration.id)) {
                state.topLevelBindings.add(binding.name);
                state.bindingStatements.set(binding.name, statement);
            }
            if (declaration.id.type !== "Identifier") continue;
            if (declaration.init === null) continue;
            const init = unwrapAlias(declaration.init);
            if (init.type === "Identifier") {
                state.aliases.set(declaration.id.name, init.name);
            }
            collectRequiredBinding(declaration, init, state);
        }
        return;
    }
    if (statement.type === "FunctionDeclaration" || statement.type === "ClassDeclaration") {
        if (statement.id === null) return;
        state.topLevelBindings.add(statement.id.name);
        state.bindingStatements.set(statement.id.name, statement);
    }
}

function requireSource(expression: Expression): string | null {
    let current = expression;
    if (
        current.type === "CallExpression" &&
        current.callee.type === "Identifier" &&
        (current.callee.name === "_interopRequireDefault" ||
            current.callee.name === "__importDefault") &&
        current.arguments.length > 0
    ) {
        const argument = current.arguments[0];
        if (argument !== undefined && argument.type !== "SpreadElement") current = argument;
    }
    if (current.type !== "CallExpression") return null;
    if (current.callee.type !== "Identifier" || current.callee.name !== "require") return null;
    const argument = current.arguments[0];
    if (argument === undefined || argument.type === "SpreadElement") return null;
    if (!is.StringLiteral(argument)) return null;
    return argument.value;
}

function collectRequiredBinding(
    declaration: VariableDeclarator,
    init: Expression,
    state: PluginState,
): void {
    if (declaration.id.type !== "Identifier") return;
    const source = requireSource(init);
    if (source === null) return;
    if (!isValidTopLevelImport(source, state)) return;
    state.styledRequired = declaration.id.name;
}

function collectImports(statement: ImportDeclaration, state: PluginState): void {
    if (!is.StringLiteral(statement.source)) return;
    if (!isValidTopLevelImport(statement.source.value, state)) return;

    for (const specifier of statement.specifiers) {
        state.topLevelBindings.add(specifier.local.name);
        state.bindingStatements.set(specifier.local.name, statement);
        if (specifier.type === "ImportDefaultSpecifier") {
            state.importNames.set("default", specifier.local.name);
            state.defaultImportIsNamespace = false;
            continue;
        }
        if (specifier.type === "ImportNamespaceSpecifier") {
            if (!state.importNames.has("default")) {
                state.importNames.set("default", specifier.local.name);
                state.defaultImportIsNamespace = true;
            }
            continue;
        }
        const name = importedName(specifier);
        if (name === null) continue;
        state.importNames.set(name, specifier.local.name);
        if (name === "styled") {
            state.importNames.set("default", specifier.local.name);
            state.defaultImportIsNamespace = false;
        }
    }
}

function collectProgramFacts(state: PluginState): void {
    for (const statement of state.program.body) {
        if (statement.type === "ImportDeclaration") collectImports(statement, state);
        collectBindingStatement(statement, state);
    }
    walk(state.program, {
        CatchClause(node) {
            if (node.param !== null) addScopeBindings(node, bindingIdentifiers(node.param), state);
        },
        ClassDeclaration(node, context) {
            if (node.id === null) return;
            addScopeBindings(nearestScope(context.ancestors(), false), [node.id], state);
        },
        Function(node, context) {
            const parameters = node.params.flatMap((parameter) => {
                if (parameter.type === "RestElement") {
                    return bindingIdentifiers(parameter.argument);
                }
                if (parameter.type === "TSParameterProperty") {
                    return bindingIdentifiers(parameter.parameter);
                }
                return bindingIdentifiers(parameter);
            });
            addScopeBindings(node, parameters, state);
            if (node.type !== "FunctionDeclaration" || node.id === null) return;
            addScopeBindings(nearestScope(context.ancestors(), false), [node.id], state);
        },
        Identifier(node) {
            state.usedNames.add(node.name);
        },
        VariableDeclaration(node, context) {
            const bindings = node.declarations.flatMap((declaration) =>
                bindingIdentifiers(declaration.id),
            );
            addScopeBindings(
                nearestScope(context.ancestors(), node.kind === "var"),
                bindings,
                state,
            );
        },
    });
}

function nearestScope(ancestors: Node[], functionScoped: boolean): Node {
    for (let index = ancestors.length - 1; index >= 0; index--) {
        const ancestor = ancestors[index]!;
        if (is.Function(ancestor) || ancestor.type === "Program") return ancestor;
        if (functionScoped) continue;
        if (
            ancestor.type === "BlockStatement" ||
            ancestor.type === "CatchClause" ||
            ancestor.type === "ForStatement" ||
            ancestor.type === "ForInStatement" ||
            ancestor.type === "ForOfStatement" ||
            ancestor.type === "SwitchStatement"
        ) {
            return ancestor;
        }
    }
    throw new Error("styled-components binding has no lexical scope");
}

function addScopeBindings(
    scope: Node,
    bindings: Identifier[],
    state: PluginState,
): void {
    let names = state.bindingScopes.get(scope);
    if (names === undefined) {
        names = new Set();
        state.bindingScopes.set(scope, names);
    }
    for (const binding of bindings) names.add(binding.name);
}

function visibleBindings(ancestors: Node[], state: PluginState): Set<string> {
    const names = new Set(state.topLevelBindings);
    for (const ancestor of ancestors) {
        const bindings = state.bindingScopes.get(ancestor);
        if (bindings === undefined) continue;
        for (const name of bindings) names.add(name);
    }
    return names;
}

function importLocalName(name: string, state: PluginState): string | null {
    if (state.options.customImportName !== null) return state.options.customImportName;
    const imported = state.importNames.get(name);
    if (imported !== undefined) return imported;
    if (state.defaultImportIsNamespace && name !== "default") return name;
    if (state.styledRequired !== null) return name === "default" ? "styled" : name;
    return null;
}

function sequenceValue(expression: Expression): Expression | null {
    if (expression.type !== "SequenceExpression") return null;
    return expression.expressions.at(-1) ?? null;
}

function resolvesToDefaultLocal(
    name: string | undefined,
    defaultLocal: string | null,
    state: PluginState,
): boolean {
    if (name === undefined || defaultLocal === null) return false;
    if (name === defaultLocal) return true;
    const visited = new Set([name]);
    let current = name;
    for (let depth = 0; depth < FILE_SEARCH_DEPTH_MAX; depth++) {
        const next = state.aliases.get(current);
        if (next === undefined) return false;
        if (next === defaultLocal) return true;
        if (visited.has(next)) return false;
        visited.add(next);
        current = next;
    }
    throw new Error("styled-components alias chain exceeded 256 bindings");
}

function identifierName(expression: Expression | null | undefined): string | undefined {
    return expression?.type === "Identifier" ? expression.name : undefined;
}

function memberName(expression: Expression | null | undefined): string | undefined {
    if (expression?.type !== "MemberExpression") return undefined;
    if (expression.property.type === "Identifier") return expression.property.name;
    if (is.StringLiteral(expression.property)) return expression.property.value;
    return undefined;
}

function isHelper(expression: Expression | null | undefined, state: PluginState): boolean {
    if (expression?.type !== "Identifier") return false;
    for (const helper of PURE_HELPERS) {
        if (expression.name === importLocalName(helper, state)) return true;
    }
    return false;
}

function isStyled(expression: Expression | null | undefined, state: PluginState): boolean {
    if (expression === null || expression === undefined) return false;
    if (
        expression.type === "CallExpression" &&
        expression.callee.type === "MemberExpression" &&
        memberName(expression.callee) !== "default"
    ) {
        return isStyled(expression.callee.object, state);
    }
    if (expression.type === "CallExpression") {
        const sequence = sequenceValue(expression.callee);
        if (
            sequence?.type === "MemberExpression" &&
            memberName(sequence) !== "default"
        ) {
            return isStyled(sequence, state);
        }
    }

    const defaultLocal = importLocalName("default", state);
    const matchesDefault = (name: string | undefined) =>
        resolvesToDefaultLocal(name, defaultLocal, state);
    if (
        expression.type === "MemberExpression" &&
        matchesDefault(identifierName(expression.object)) &&
        expression.property.type !== "PrivateIdentifier" &&
        !isHelper(expression.property, state)
    ) {
        return true;
    }
    if (
        expression.type === "CallExpression" &&
        matchesDefault(identifierName(expression.callee))
    ) {
        return true;
    }
    if (expression.type === "CallExpression") {
        const sequence = sequenceValue(expression.callee);
        if (matchesDefault(identifierName(sequence))) return true;
    }

    const required = state.styledRequired;
    if (required !== null && expression.type === "MemberExpression") {
        const object = expression.object;
        if (
            object.type === "MemberExpression" &&
            memberName(object) === "default" &&
            identifierName(object.object) === required
        ) {
            return true;
        }
    }
    if (required !== null && expression.type === "CallExpression") {
        const callee = expression.callee;
        if (
            callee.type === "MemberExpression" &&
            memberName(callee) === "default" &&
            identifierName(callee.object) === required
        ) {
            return true;
        }
        const sequence = sequenceValue(callee);
        if (
            sequence?.type === "MemberExpression" &&
            memberName(sequence) === "default" &&
            identifierName(sequence.object) === required
        ) {
            return true;
        }
    }
    if (defaultLocal !== null && expression.type === "MemberExpression") {
        const object = expression.object;
        return (
            object.type === "MemberExpression" &&
            memberName(object) === "default" &&
            identifierName(object.object) === defaultLocal
        );
    }
    return false;
}

function hasConfigProperty(object: ObjectExpression): boolean {
    return object.properties.some((entry) => {
        if (entry.type !== "Property") return false;
        if (entry.key.type === "Identifier") {
            return !entry.computed && CONFIG_PROPERTY_NAMES.has(entry.key.name);
        }
        if (is.StringLiteral(entry.key)) return CONFIG_PROPERTY_NAMES.has(entry.key.value);
        return false;
    });
}

function configObjectFromCall(node: CallExpression): ObjectExpression | null {
    const first = node.arguments[0];
    if (first === undefined || first.type === "SpreadElement") return null;
    return first.type === "ObjectExpression" ? first : null;
}

function existingConfig(node: CallExpression): CallExpression | null {
    const callee = node.callee;
    if (callee.type !== "CallExpression") return null;
    if (callee.callee.type === "MemberExpression" && memberName(callee.callee) === "withConfig") {
        return callee;
    }
    if (callee.callee.type !== "MemberExpression") return null;
    const object = callee.callee.object;
    if (object.type !== "CallExpression") return null;
    if (object.callee.type !== "MemberExpression") return null;
    return memberName(object.callee) === "withConfig" ? object : null;
}

function declarationName(ancestors: Node[]): string | null {
    let named: Node | null = null;
    for (let index = ancestors.length - 1; index >= 0; index--) {
        const ancestor = ancestors[index]!;
        if (ancestor.type === "AssignmentExpression") {
            named = ancestor.left;
            continue;
        }
        if (ancestor.type === "Property") {
            named = ancestor.key;
            break;
        }
        if (ancestor.type === "PropertyDefinition") {
            named = ancestor.key;
            break;
        }
        if (ancestor.type === "VariableDeclarator") {
            named = ancestor.id;
            break;
        }
        if (is.Statement(ancestor)) break;
    }
    if (named?.type === "MemberExpression") named = named.property;
    return named?.type === "Identifier" ? named.name : null;
}

function displayName(ancestors: Node[], state: PluginState): string | null {
    const componentName = declarationName(ancestors);
    if (!state.options.fileName) return componentName;
    const base = basename(state.filename, extname(state.filename));
    const block = state.options.meaninglessFileNames.has(base)
        ? basename(dirname(state.filename))
        : base;
    const safeBlock = block.replace(/^(\d)/, "sc-$1");
    if (safeBlock === componentName) return componentName;
    return componentName === null ? safeBlock : `${safeBlock}__${componentName}`;
}

function addPureComment(node: Node): void {
    const comments = node.comments ?? [];
    if (comments.some((comment) => comment.value === "#__PURE__")) return;
    node.comments = [
        ...comments,
        { position: "before", sameLine: true, type: "Block", value: "#__PURE__" },
    ];
}

function shouldAnnotatePure(expression: Expression, state: PluginState): boolean {
    if (isStyled(expression, state)) return true;
    if (expression.type === "CallExpression" && isStyled(expression.callee, state)) return true;
    if (expression.type === "TaggedTemplateExpression") {
        return isStyled(expression.tag, state) || isHelper(expression.tag, state);
    }
    if (expression.type === "CallExpression") return isHelper(expression.callee, state);
    return false;
}

function componentId(state: PluginState): string {
    const id = `${state.options.namespace}sc-${state.fileHash}-${state.componentIndex}`;
    state.componentIndex++;
    return id;
}

function taggedAlreadyConfigured(node: TaggedTemplateExpression): boolean {
    if (node.tag.type !== "CallExpression") return false;
    if (node.tag.callee.type !== "MemberExpression") return false;
    if (memberName(node.tag.callee) !== "withConfig") return false;
    const object = configObjectFromCall(node.tag);
    return object !== null && hasConfigProperty(object);
}

function addTaggedConfig(
    node: TaggedTemplateExpression,
    ancestors: Node[],
    state: PluginState,
): void {
    if (taggedAlreadyConfigured(node)) return;
    if (!isStyled(node.tag, state)) return;
    const properties: ObjectProperty[] = [];
    if (state.options.displayName) {
        const name = displayName(ancestors, state)?.replace(/[^_a-zA-Z0-9-]/g, "");
        if (name) properties.push(property("displayName", name));
    }
    if (state.options.ssr) properties.push(property("componentId", componentId(state)));
    if (properties.length === 0) return;
    node.tag = call(staticMember(node.tag, "withConfig"), [
        b.ObjectExpression({ properties }),
    ]);
}

function callNeedsConfig(node: CallExpression, state: PluginState): boolean {
    if (!isStyled(node.callee, state)) return false;
    const callee = node.callee;
    if (callee.type === "MemberExpression" && memberName(callee) === "withConfig") return false;
    if (callee.type !== "CallExpression") return true;
    if (callee.callee.type !== "MemberExpression") return true;
    const name = memberName(callee.callee);
    if (name !== "withConfig") return true;
    const object = configObjectFromCall(callee);
    return object !== null && !hasConfigProperty(object);
}

function addCallConfig(
    node: CallExpression,
    context: WalkContext<CallExpression, PluginState>,
): CallExpression {
    const state = context.state;
    if (!callNeedsConfig(node, state)) return node;
    const properties: ObjectProperty[] = [];
    if (state.options.displayName) {
        const name = displayName(context.ancestors(), state)?.replace(/[^_a-zA-Z0-9-]/g, "");
        if (name) properties.push(property("displayName", name));
    }
    if (state.options.ssr) properties.push(property("componentId", componentId(state)));
    if (properties.length === 0) return node;

    const previous = existingConfig(node);
    if (previous !== null) {
        const object = configObjectFromCall(previous);
        if (object !== null && !hasConfigProperty(object)) {
            object.properties.push(...properties);
            return node;
        }
    }
    if (node.callee.type === "CallExpression") {
        const object = configObjectFromCall(node.callee);
        if (
            node.callee.callee.type === "MemberExpression" &&
            memberName(node.callee.callee) === "withConfig" &&
            object !== null &&
            !hasConfigProperty(object)
        ) {
            object.properties.push(...properties);
            return node;
        }
    }

    const configured = call(staticMember(node.callee, "withConfig"), [
        b.ObjectExpression({ properties }),
    ]);
    const replacement = call(configured, node.arguments);
    context.replace(replacement);
    return replacement;
}

function makePlaceholder(index: number): string {
    return `__PLACEHOLDER_${index}__`;
}

function countOccurrences(value: string, search: string): number {
    return value.split(search).length - 1;
}

function stripLineComment(line: string): string {
    const fragments = line.split(/\/\//g);
    let result = fragments[0] ?? "";
    for (let index = 1; index < fragments.length; index++) {
        const complete =
            !result.endsWith(":") &&
            countOccurrences(result, "'") % 2 === 0 &&
            countOccurrences(result, '"') % 2 === 0 &&
            countOccurrences(result, "(") === countOccurrences(result, ")");
        if (complete) break;
        result += `//${fragments[index]}`;
    }
    return result;
}

function compressSymbols(code: string): string {
    return code.split(SYMBOL_PATTERN).reduce((result, fragment, index) => {
        if (index % 2 === 0) return result + fragment;
        if (
            countOccurrences(result, "'") % 2 !== 0 ||
            countOccurrences(result, '"') % 2 !== 0
        ) {
            return result + fragment;
        }
        if (/^\s+:/.test(fragment)) return `${result} ${fragment.trim()}`;
        return result + fragment.trim();
    }, "");
}

function minifyValue(code: string, linebreakPattern: string): [string, number[]] {
    const linebreak = new RegExp(`${linebreakPattern}\\s*`, "g");
    const multiline = new RegExp(`\\/\\*[^!]((.|${linebreakPattern}))*?\\*\\/`, "g");
    const output = code
        .replace(multiline, "\n")
        .split(linebreak)
        .filter((line) => line.length > 0 && !line.trim().startsWith("//"))
        .map(stripLineComment)
        .join(" ");
    const before = code.match(PLACEHOLDER_PATTERN) ?? [];
    const after = new Set(output.match(PLACEHOLDER_PATTERN) ?? []);
    const eliminated = before
        .filter((placeholder) => !after.has(placeholder))
        .map((placeholder) => Number(placeholder.match(/\d+/)?.[0]));
    return [compressSymbols(output), eliminated];
}

function injectPlaceholders(values: Array<string | null>): string {
    let output = "";
    for (let index = 0; index < values.length; index++) {
        output += values[index] ?? "";
        if (index + 1 < values.length) output += makePlaceholder(index);
    }
    return output;
}

function minifyTemplate(node: TaggedTemplateExpression): void {
    const expressions = [...node.quasi.expressions];
    const raw = minifyValue(
        injectPlaceholders(node.quasi.quasis.map((quasi) => quasi.value.raw)),
        "(?:\\\\r|\\\\n|\\r|\\n)",
    )[0].split(PLACEHOLDER_SPLIT_PATTERN);
    const [cookedValue, eliminated] = minifyValue(
        injectPlaceholders(node.quasi.quasis.map((quasi) => quasi.value.cooked)),
        "[\\r\\n]",
    );
    const cooked = cookedValue.split(PLACEHOLDER_SPLIT_PATTERN);
    const eliminatedSet = new Set(eliminated);
    node.quasi.expressions = expressions.filter((_, index) => !eliminatedSet.has(index));
    node.quasi.quasis = cooked.map((value, index) =>
        b.TemplateElement({
            tail: index + 1 === cooked.length,
            value: { cooked: value, raw: raw[index] ?? "" },
        }),
    );
}

function transpileTemplate(node: TaggedTemplateExpression): CallExpression {
    const values = node.quasi.quasis
        .filter((quasi) => quasi.value.cooked !== null)
        .map((quasi) => stringLiteral(quasi.value.cooked ?? ""));
    return call(node.tag, [
        b.ArrayExpression({ elements: values }),
        ...node.quasi.expressions,
    ]);
}

function processTaggedTemplate(
    node: TaggedTemplateExpression,
    context: WalkContext<TaggedTemplateExpression, PluginState>,
): void {
    const state = context.state;
    const supported = isStyled(node.tag, state) || isHelper(node.tag, state);
    if (!supported) return;
    if (state.options.minify) minifyTemplate(node);
    addTaggedConfig(node, context.ancestors(), state);
    if (state.options.transpileTemplateLiterals) {
        const replacement = transpileTemplate(node);
        const parent = context.parent;
        const annotatable =
            parent?.type === "VariableDeclarator" ||
            parent?.type === "TaggedTemplateExpression";
        if (state.options.pure && annotatable && shouldAnnotatePure(node, state)) {
            addPureComment(replacement);
        }
        context.replace(replacement);
        return;
    }
    if (state.options.pure && shouldAnnotatePure(node, state)) addPureComment(node);
}

function processCallExpression(
    node: CallExpression,
    context: WalkContext<CallExpression, PluginState>,
): void {
    const state = context.state;
    const processed = addCallConfig(node, context);
    if (!state.options.pure) return;
    const parent = context.parent;
    if (parent?.type !== "VariableDeclarator" && parent?.type !== "TaggedTemplateExpression") {
        return;
    }
    if (shouldAnnotatePure(processed, state)) addPureComment(processed);
}

function processStyledNodes(root: Node, state: PluginState): void {
    const visitors: Visitors<PluginState> = {
        CallExpression: processCallExpression,
        TaggedTemplateExpression: processTaggedTemplate,
    };
    walk(root, visitors, state);
}

function uniqueName(hint: string, state: PluginState): string {
    for (let suffix = 0; suffix < 100_000; suffix++) {
        const candidate = suffix === 0 ? `_${hint}` : `_${hint}${suffix + 1}`;
        if (state.usedNames.has(candidate)) continue;
        state.usedNames.add(candidate);
        return candidate;
    }
    throw new Error(`unable to generate a unique ${hint} identifier`);
}

function identifierHint(name: string): string {
    return name.replace(/[^A-Za-z0-9_$]/g, "");
}

function transientCSSIdentifier(state: PluginState): Identifier {
    for (let attempts = 0; attempts < 100_000; attempts++) {
        state.cssIdentifierIndex++;
        const suffix = state.cssIdentifierIndex === 1 ? "" : String(state.cssIdentifierIndex);
        const name = `$_css${suffix}`;
        if (state.usedNames.has(name)) continue;
        state.usedNames.add(name);
        return identifier(name);
    }
    throw new Error("unable to generate a transient css prop identifier");
}

function jsxName(node: JSXElementName): string {
    if (node.type === "JSXIdentifier") return node.name;
    if (node.type === "JSXMemberExpression") {
        return `${jsxName(node.object)}.${node.property.name}`;
    }
    throw new Error(`Cannot infer styled-components css prop name from ${node.type}`);
}

function jsxNameExpression(node: JSXElementName): Expression {
    if (node.type === "JSXIdentifier") return identifier(node.name);
    if (node.type === "JSXMemberExpression") {
        return staticMember(jsxNameExpression(node.object), node.property.name);
    }
    throw new Error(`Cannot infer styled-components css prop expression from ${node.type}`);
}

function jsxAttribute(name: string, value: Expression): JSXAttribute {
    return b.JSXAttribute({
        name: b.JSXIdentifier({ name }),
        value: b.JSXExpressionContainer({ expression: value }),
    });
}

function templateFromCSSAttribute(attribute: JSXAttribute): CSSValue | null {
    if (is.StringLiteral(attribute.value)) {
        return b.TemplateLiteral({
            expressions: [],
            quasis: [
                b.TemplateElement({
                    tail: true,
                    value: { cooked: attribute.value.value, raw: attribute.value.value },
                }),
            ],
        });
    }
    if (attribute.value?.type !== "JSXExpressionContainer") return null;
    const expression = attribute.value.expression;
    if (expression.type === "JSXEmptyExpression") return null;
    if (expression.type === "TemplateLiteral") return expression;
    if (
        expression.type === "TaggedTemplateExpression" &&
        expression.tag.type === "Identifier" &&
        expression.tag.name === "css"
    ) {
        return expression.quasi;
    }
    if (expression.type === "ObjectExpression") return expression;
    return b.TemplateLiteral({
        expressions: [expression],
        quasis: [
            b.TemplateElement({ tail: false, value: { cooked: "", raw: "" } }),
            b.TemplateElement({ tail: true, value: { cooked: "", raw: "" } }),
        ],
    });
}

function isPrimitive(expression: Expression): boolean {
    return (
        is.BigIntLiteral(expression) ||
        is.BooleanLiteral(expression) ||
        is.NullLiteral(expression) ||
        is.NumericLiteral(expression) ||
        is.StringLiteral(expression)
    );
}

function boundIdentifierExpression(expression: Expression, state: PluginState): boolean {
    return expression.type === "Identifier" && state.topLevelBindings.has(expression.name);
}

function appendTransientAttribute(
    opening: JSXOpeningElement,
    expression: Expression,
    state: PluginState,
): Identifier {
    const name = transientCSSIdentifier(state);
    opening.attributes.push(jsxAttribute(name.name, expression));
    return name;
}

function rewriteCSSObject(
    object: ObjectExpression,
    opening: JSXOpeningElement,
    bindings: Set<string>,
    state: PluginState,
): boolean {
    let dynamic = false;
    const parameter = identifier("p");
    const output: ObjectExpression["properties"] = [];
    for (const entry of object.properties) {
        if (entry.type === "SpreadElement") {
            if (entry.argument.type === "ObjectExpression") {
                dynamic = rewriteCSSObject(entry.argument, opening, bindings, state) || dynamic;
            } else {
                dynamic = true;
                const transient = appendTransientAttribute(opening, entry.argument, state);
                entry.argument = staticMember(parameter, transient.name);
            }
            output.push(entry);
            continue;
        }

        const key = entry.key;
        const value = entry.value;
        const dynamicKey =
            key.type === "MemberExpression" ||
            key.type === "CallExpression" ||
            (key.type === "Identifier" &&
                entry.computed &&
                bindings.has(key.name) &&
                !(value.type === "Identifier" && key.name === value.name) &&
                value.type !== "MemberExpression" &&
                value.type !== "LogicalExpression" &&
                value.type !== "ConditionalExpression");
        if (dynamicKey) {
            dynamic = true;
            const keyExpression = key as Expression;
            const transient = appendTransientAttribute(opening, keyExpression, state);
            entry.key = staticMember(parameter, transient.name);
        }

        if (value.type === "ObjectExpression") {
            dynamic = rewriteCSSObject(value, opening, bindings, state) || dynamic;
            output.push(entry);
            continue;
        }
        if (!isPrimitive(value)) {
            dynamic = true;
            const transient = appendTransientAttribute(opening, value, state);
            output.push(
                b.Property({
                    computed: entry.computed,
                    key: entry.key,
                    kind: entry.kind,
                    method: false,
                    shorthand: false,
                    value: staticMember(parameter, transient.name),
                }) as ObjectProperty,
            );
            continue;
        }
        output.push(entry);
    }
    object.properties = output;
    return dynamic;
}

function rewriteCSSTemplate(
    template: TemplateLiteral,
    opening: JSXOpeningElement,
    state: PluginState,
): void {
    template.expressions = template.expressions.map((expression) => {
        if (
            boundIdentifierExpression(expression, state) ||
            expression.type === "FunctionExpression" ||
            expression.type === "ArrowFunctionExpression"
        ) {
            return expression;
        }
        const transient = appendTransientAttribute(opening, expression, state);
        const parameter = identifier("p");
        return b.ArrowFunctionExpression({
            async: false,
            body: staticMember(parameter, transient.name),
            expression: true,
            generator: false,
            id: null,
            params: [parameter],
        });
    });
}

function defaultStyledIdentifier(state: PluginState): Identifier {
    const custom = state.options.customImportName;
    if (custom !== null) return identifier(custom);
    const existing = state.importNames.get("default");
    if (state.cssPropDefaultReusable && existing !== undefined) return identifier(existing);

    const name = uniqueName("styled", state);
    let declaration = state.cssPropImportDeclaration;
    if (declaration === null) {
        declaration = b.ImportDeclaration({
            attributes: [],
            phase: null,
            source: stringLiteral(state.options.cssPropImportPath),
            specifiers: [b.ImportDefaultSpecifier({ local: identifier(name) })],
        });
        state.program.body.unshift(declaration);
        state.cssPropImportDeclaration = declaration;
    } else {
        declaration.specifiers.push(
            b.ImportSpecifier({
                imported: identifier("default"),
                local: identifier(name),
            }),
        );
    }
    state.importNames.set("default", name);
    state.defaultImportIsNamespace = false;
    state.topLevelBindings.add(name);
    state.bindingStatements.set(name, declaration);
    return identifier(name);
}

function enclosingJSXElement(ancestors: Node[]): JSXElement | null {
    for (let index = ancestors.length - 1; index >= 0; index--) {
        const ancestor = ancestors[index]!;
        if (ancestor.type === "JSXElement") return ancestor;
    }
    return null;
}

function transformCSSAttribute(
    attribute: JSXAttribute,
    context: WalkContext<JSXAttribute, PluginState>,
    pending: PendingDeclaration[],
): void {
    if (attribute.name.type !== "JSXIdentifier" || attribute.name.name !== "css") return;
    const state = context.state;
    const opening = context.parent;
    if (opening?.type !== "JSXOpeningElement") return;
    const element = enclosingJSXElement(context.ancestors());
    if (element === null) return;
    let css = templateFromCSSAttribute(attribute);
    if (css === null) return;

    const originalName = opening.name;
    const name = jsxName(originalName);
    const capitalized = name.replace(/^([a-z])/, (_, letter: string) => letter.toUpperCase());
    const generated = uniqueName(`Styled${identifierHint(capitalized)}`, state);
    const styledImport = defaultStyledIdentifier(state);
    const styled = TAG_NAME_PATTERN.test(name)
        ? call(styledImport, [stringLiteral(name)])
        : call(styledImport, [jsxNameExpression(originalName)]);

    context.remove();
    opening.name = b.JSXIdentifier({ name: generated });
    if (element.closingElement !== null) {
        element.closingElement.name = b.JSXIdentifier({ name: generated });
    }

    if (css.type === "ObjectExpression") {
        if (rewriteCSSObject(css, opening, visibleBindings(context.ancestors(), state), state)) {
            const parameter = identifier("p");
            css = b.ArrowFunctionExpression({
                async: false,
                body: css,
                expression: true,
                generator: false,
                id: null,
                params: [parameter],
            });
        }
    } else if (css.type === "TemplateLiteral") {
        rewriteCSSTemplate(css, opening, state);
    }

    const init =
        css.type === "ObjectExpression" || css.type === "ArrowFunctionExpression"
            ? call(styled, [css])
            : b.TaggedTemplateExpression({ quasi: css, tag: styled });
    const declaration = b.VariableDeclaration({
        declarations: [
            b.VariableDeclarator({ id: identifier(generated), init }),
        ],
        kind: "var",
    });
    processStyledNodes(declaration, state);
    const binding = TAG_NAME_PATTERN.test(name) ? null : state.bindingStatements.get(name) ?? null;
    pending.push({ after: binding?.type === "ImportDeclaration" ? null : binding, declaration });
}

function insertPendingDeclarations(pending: PendingDeclaration[], state: PluginState): void {
    for (const entry of pending) {
        if (entry.after === null) {
            state.program.body.push(entry.declaration);
            continue;
        }
        const index = state.program.body.indexOf(entry.after);
        if (index < 0) throw new Error("css prop binding statement disappeared during transform");
        state.program.body.splice(index + 1, 0, entry.declaration);
    }
}

function transformCSSProps(state: PluginState): void {
    if (!state.options.cssProp) return;
    const pending: PendingDeclaration[] = [];
    walk(
        state.program,
        {
            JSXAttribute(node, context) {
                transformCSSAttribute(node, context, pending);
            },
        },
        state,
    );
    insertPendingDeclarations(pending, state);
}

function murmurHash(value: string): string {
    let length = value.length;
    let hash = length;
    let index = 0;
    while (length >= 4) {
        let chunk =
            (value.charCodeAt(index) & 0xff) |
            ((value.charCodeAt(++index) & 0xff) << 8) |
            ((value.charCodeAt(++index) & 0xff) << 16) |
            ((value.charCodeAt(++index) & 0xff) << 24);
        chunk =
            (chunk & 0xffff) * 0x5bd1e995 +
            ((((chunk >>> 16) * 0x5bd1e995) & 0xffff) << 16);
        chunk ^= chunk >>> 24;
        chunk =
            (chunk & 0xffff) * 0x5bd1e995 +
            ((((chunk >>> 16) * 0x5bd1e995) & 0xffff) << 16);
        hash =
            ((hash & 0xffff) * 0x5bd1e995 +
                ((((hash >>> 16) * 0x5bd1e995) & 0xffff) << 16)) ^
            chunk;
        length -= 4;
        index++;
    }
    if (length === 3) hash ^= (value.charCodeAt(index + 2) & 0xff) << 16;
    if (length >= 2) hash ^= (value.charCodeAt(index + 1) & 0xff) << 8;
    if (length >= 1) {
        hash ^= value.charCodeAt(index) & 0xff;
        hash =
            (hash & 0xffff) * 0x5bd1e995 +
            ((((hash >>> 16) * 0x5bd1e995) & 0xffff) << 16);
    }
    hash ^= hash >>> 13;
    hash =
        (hash & 0xffff) * 0x5bd1e995 +
        ((((hash >>> 16) * 0x5bd1e995) & 0xffff) << 16);
    hash ^= hash >>> 15;
    return (hash >>> 0).toString(36);
}

function findModuleRoot(filename: string): string | null {
    let directory = dirname(filename);
    for (let depth = 0; depth < FILE_SEARCH_DEPTH_MAX; depth++) {
        if (existsSync(join(directory, "package.json"))) return directory;
        const parent = dirname(directory);
        if (parent === directory) return null;
        directory = parent;
    }
    throw new Error("styled-components module root search exceeded 256 directories");
}

function fileHash(filename: string, source: string): string {
    const moduleRoot = findModuleRoot(filename);
    if (moduleRoot === null) return murmurHash(source);
    const packageValue = JSON.parse(
        readFileSync(join(moduleRoot, "package.json"), "utf8"),
    ) as { name?: unknown };
    const moduleName = typeof packageValue.name === "string" ? packageValue.name : "";
    const filePath = relative(moduleRoot, filename).replaceAll(sep, "/");
    return murmurHash(`${moduleName}${filePath}`);
}

/**
 * Applies the full babel-plugin-styled-components 2.3.0 transform contract to a Yuku ESTree.
 */
export function transformStyledComponentsYuku(
    program: Program,
    source: string,
    filename: string,
    options: YukuStyledComponentsOptions = {},
): void {
    if (source.length > 100_000_000) {
        throw new RangeError("styled-components source must not exceed 100 MB");
    }
    if (filename.length === 0) throw new RangeError("styled-components filename must not be empty");
    const resolved = resolveOptions(options);
    const state: PluginState = {
        aliases: new Map(),
        bindingStatements: new Map(),
        bindingScopes: new WeakMap(),
        componentIndex: 0,
        cssIdentifierIndex: 0,
        cssPropDefaultReusable: false,
        cssPropImportDeclaration: null,
        defaultImportIsNamespace: false,
        fileHash: fileHash(filename, source),
        filename,
        importNames: new Map(),
        options: resolved,
        program,
        styledRequired: null,
        topLevelBindings: new Set(),
        usedNames: new Set(),
    };
    collectProgramFacts(state);
    state.cssPropDefaultReusable =
        state.options.customImportName !== null ||
        (state.importNames.has("default") && !state.defaultImportIsNamespace);
    processStyledNodes(program, state);
    transformCSSProps(state);
}
