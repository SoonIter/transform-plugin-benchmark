import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { test } from "node:test";
import { transformSync as babelTransformSync } from "@babel/core";
import { CommentMode, Lang, parseSync, printSync, SourceType } from "@swc-next/core";
import babelStyledComponentsPlugin from "babel-plugin-styled-components";
import { generate } from "yuku-codegen";
import { parse, type Program } from "yuku-parser";
import {
    transformStyledComponentsYuku,
    type YukuStyledComponentsOptions,
} from "../scripts/yuku-styled-components-plugin";
import { transformStyledComponentsZimmerframe } from "../scripts/zimmerframe-styled-components-plugin";

interface ParityCase {
    filename?: string;
    name: string;
    options: YukuStyledComponentsOptions;
    source: string;
}

interface UpstreamCorpus {
    cases: Array<{
        name: string;
        options: YukuStyledComponentsOptions;
        source: string;
    }>;
    upstream: string;
    upstreamCommit: string;
    version: string;
}

const UPSTREAM_FIXTURES_PATH = join(
    process.cwd(),
    "test/fixtures/babel-plugin-styled-components-v2.3.0.json",
);
const UPSTREAM_CORPUS = JSON.parse(
    readFileSync(UPSTREAM_FIXTURES_PATH, "utf8"),
) as UpstreamCorpus;

const CASES: ParityCase[] = [
    {
        name: "default and named imports with every template helper",
        options: { displayName: false, minify: true, pure: true, ssr: false },
        source: `
            import styled, {
                createGlobalStyle as globalStyle,
                css as stylesheet,
                keyframes as frames,
                useTheme,
                withTheme,
            } from "styled-components";
            const A = styled.div\` color: red; \`;
            const B = styled(Component).attrs({ role: "button" })\` color: blue; \`;
            const C = stylesheet\` color: green; \`;
            const D = frames\` from { opacity: 0; } to { opacity: 1; } \`;
            const E = globalStyle\` body { margin: 0; } \`;
            const F = withTheme(Component);
            const G = useTheme();
        `,
    },
    {
        name: "named styled import and local alias chains",
        options: { fileName: false, minify: false, transpileTemplateLiterals: false },
        source: `
            import { styled } from "styled-components";
            const first = styled;
            const second = first;
            const Alias = second.section\` color: red; \`;
        `,
    },
    {
        name: "custom top-level import paths",
        options: {
            displayName: false,
            minify: false,
            topLevelImportPaths: ["@theme/styled-*", "packages/**/styled"],
            transpileTemplateLiterals: false,
        },
        source: `
            import styled from "@theme/styled-components";
            const A = styled.div\` color: red; \`;
        `,
    },
    {
        name: "CommonJS and transpiler default wrappers",
        options: { fileName: false, minify: false, transpileTemplateLiterals: false },
        source: `
            const imported = _interopRequireDefault(require("styled-components"));
            const A = imported.default.div\` color: red; \`;
            const importedTS = __importDefault(require("styled-components"));
            const B = importedTS.default(Component)\` color: blue; \`;
        `,
    },
    {
        filename: "/workspace/components/7-card.tsx",
        name: "display names, namespaces, and component IDs",
        options: {
            fileName: true,
            minify: false,
            namespace: "tenant",
            transpileTemplateLiterals: false,
        },
        source: `
            import styled from "styled-components";
            const Card = styled.div\` color: red; \`;
            export const Nested = { Item: styled.span\` color: blue; \` };
            registry.Action = styled.button\` color: green; \`;
        `,
    },
    {
        name: "existing withConfig objects and spread properties",
        options: { fileName: false, minify: false, transpileTemplateLiterals: false },
        source: `
            import styled from "styled-components";
            const A = styled.div.withConfig({ role: "main" })\` color: red; \`;
            const B = styled.div.withConfig({ ...config })\` color: blue; \`;
            const C = styled.div.withConfig({ "displayName": "Manual" })\` color: green; \`;
            const D = styled(Component).attrs({ role: "button" })({ color: "red" });
        `,
    },
    {
        name: "CSS minification and removed interpolations",
        options: {
            displayName: false,
            minify: true,
            ssr: false,
        },
        source: `
            import styled, { css } from "styled-components";
            const A = styled.div\`
                color: red; // remove this comment
                // remove this interpolation ${"${unused}"}
                background: url("https://example.test/a:b");
                &:hover { color: ${"${active}"}; }
            \`;
            const B = css\` margin: 0  1px; \`;
        `,
    },
    {
        name: "template literal lowering can be disabled and enabled",
        options: { displayName: false, minify: false, ssr: false },
        source: `
            import styled, { css } from "styled-components";
            const A = styled.div\` color: ${"${color}"}; \`;
            const B = css\` display: ${"${visible ? 'block' : 'none'}"}; \`;
        `,
    },
    {
        name: "intrinsic and custom component css props",
        options: {
            displayName: false,
            fileName: false,
            minify: false,
            ssr: false,
            transpileTemplateLiterals: false,
        },
        source: `
            import styled from "styled-components";
            const Paragraph = props => <p {...props} />;
            const A = () => <div css="color: red;" />;
            const B = () => <Paragraph css={\`color: blue;\`}>text</Paragraph>;
            const C = () => <UI.Button css={dynamicCSS} />;
        `,
    },
    {
        name: "css prop injects a callable default beside namespace imports",
        options: {
            displayName: false,
            fileName: false,
            minify: false,
            ssr: false,
            transpileTemplateLiterals: false,
        },
        source: `
            import * as styled from "styled-components";
            export const App = () => <main css="display: grid;" />;
        `,
    },
    {
        name: "css prop custom import path",
        options: {
            cssPropImportPath: "styled-components/native",
            displayName: false,
            fileName: false,
            minify: false,
            ssr: false,
            transpileTemplateLiterals: false,
        },
        source: `
            const View = props => <view {...props} />;
            export const App = () => <View css={{ backgroundColor: "red" }} />;
        `,
    },
    {
        name: "css prop object values, computed keys, nesting, and spreads",
        options: { fileName: false, minify: false, transpileTemplateLiterals: false },
        source: `
            import styled from "styled-components";
            const color = "tomato";
            const selector = ":hover";
            const shared = { display: "block" };
            const App = props => (
                <div css={{
                    color,
                    [selector]: { color: props.hoverColor },
                    ...shared,
                    opacity: props.visible ? 1 : 0,
                }} />
            );
        `,
    },
    {
        name: "css prop preserves an unbound computed key",
        options: { fileName: false, minify: false, transpileTemplateLiterals: false },
        source: `
            import styled from "styled-components";
            const App = () => <div css={{ [unboundSelector]: "red" }} />;
        `,
    },
    {
        name: "unrelated styled packages and assignments remain untouched",
        options: {},
        source: `
            import styled from "not-styled-components";
            let target;
            target = styled.div\` color: red; \`;
        `,
    },
];

function canonicalizeMatches(source: string, pattern: RegExp, prefix: string): string {
    const replacements = new Map<string, string>();
    for (const match of source.matchAll(pattern)) {
        const value = match[0];
        if (!replacements.has(value)) {
            replacements.set(value, `${prefix}${replacements.size + 1}`);
        }
    }
    const entries = Array.from(replacements).sort(
        ([left], [right]) => right.length - left.length,
    );
    let output = source;
    for (const [value, replacement] of entries) {
        output = output.replaceAll(value, replacement);
    }
    return output;
}

function canonicalizePrivateNames(source: string): string {
    let output = canonicalizeMatches(source, /\b_styled\d*\b/g, "_import");
    output = canonicalizeMatches(output, /\b_Styled[A-Za-z0-9_$]*\b/g, "_component");
    return canonicalizeMatches(output, /\$_css\d*/g, "$prop");
}

function normalize(
    source: string,
    options: { canonicalPrivateNames?: boolean; comments?: boolean } = {},
): string {
    const parsed = parse(source, {
        attachComments: true,
        lang: "jsx",
        preserveParens: false,
        sourceType: "module",
    });
    assert.equal(
        parsed.diagnostics.length,
        0,
        `${parsed.diagnostics[0]?.message ?? "parse failed"}\n${source}`,
    );
    const generated = generate(parsed.program, {
        comments: options.comments ?? true,
        format: "compact",
        quotes: "double",
    });
    assert.equal(generated.errors.length, 0, generated.errors[0]?.message);
    return options.canonicalPrivateNames
        ? canonicalizePrivateNames(generated.code)
        : generated.code;
}

function babelTransform(testCase: ParityCase): string {
    const result = babelTransformSync(testCase.source, {
        ast: false,
        babelrc: false,
        code: true,
        comments: true,
        compact: false,
        configFile: false,
        filename: testCase.filename ?? "/workspace/src/case.jsx",
        parserOpts: { sourceType: "module" },
        plugins: [[babelStyledComponentsPlugin, testCase.options]],
        sourceMaps: false,
    });
    assert.notEqual(result?.code, null);
    assert.notEqual(result?.code, undefined);
    return result!.code!;
}

function yukuTransform(testCase: ParityCase, walker: "yuku" | "zimmerframe" = "yuku"): string {
    const parsed = parse(testCase.source, {
        attachComments: true,
        lang: "jsx",
        preserveParens: false,
        sourceType: "module",
    });
    assert.equal(parsed.diagnostics.length, 0, parsed.diagnostics[0]?.message);
    const plugin = walker === "yuku" ? transformStyledComponentsYuku : transformStyledComponentsZimmerframe;
    const transformed = plugin(
        parsed.program,
        testCase.source,
        testCase.filename ?? "/workspace/src/case.jsx",
        testCase.options,
    );
    const generated = generate(transformed ?? parsed.program, {
        comments: "some",
        format: "pretty",
    });
    assert.equal(generated.errors.length, 0, generated.errors[0]?.message);
    return generated.code;
}

function swcNextTransform(testCase: ParityCase, walker: "yuku" | "zimmerframe"): string {
    const parsed = parseSync(testCase.source, {
        comments: CommentMode.None,
        lang: Lang.Jsx,
        preserveParens: true,
        sourceType: SourceType.Module,
    });
    assert.equal(parsed.diagnostics.length, 0, parsed.diagnostics[0]?.message);
    const program = parsed.program as Program;
    const plugin = walker === "yuku" ? transformStyledComponentsYuku : transformStyledComponentsZimmerframe;
    const transformed = plugin(
        program,
        testCase.source,
        testCase.filename ?? "/workspace/src/case.jsx",
        testCase.options,
    );
    return printSync(transformed ?? program).code;
}

// Exercise native replacement returns, pure comments, copied scopes/statements,
// CSS-attribute removal, and import insertion independently of SWC Next printing.
const WALKER_CASES: ParityCase[] = [
    {
        name: "nested JSX attributes retain CSS component ID order",
        options: { pure: true },
        source: 'const App = () => <div before={<span css="color: blue;" />} css="color: red;" after={<main css="color: green;" />} />;',
    },
    {
        name: "nested helpers and non-declarator pure annotations",
        options: { pure: true },
        source: 'import styled, { css } from "styled-components"; consume(css`color: red;`); const A = styled.div`color: ${css`color: blue;`};`; const B = [styled.div`margin: 0;`];',
    },
    {
        name: "copied function scopes with CSS props and local bindings",
        options: { pure: true },
        source: 'import styled from "styled-components"; function View({ color }) { const Local = styled.div`color: red;`; return <Local css={{ color }} data-x={color}><span css="padding: 0;" /></Local>; }',
    },
    {
        name: "CSS prop custom component declared in a transformed statement",
        options: { pure: true },
        source: 'import styled from "styled-components"; const Card = styled.div`color: red;`; const App = () => <Card before="a" css={{ color: active }} after="b" />;',
    },
    {
        name: "CSS import insertion and multiple sibling removals",
        options: { pure: true },
        source: 'const App = ({ color }) => <><div before="a" css={{ color }} after="b" /><span css="margin: 0;" /><main css={`color: ${color};`} /></>;',
    },
];

for (const testCase of [...CASES, ...UPSTREAM_CORPUS.cases, ...WALKER_CASES]) {
    test(`independent plugins match including comments for ${testCase.name}`, () => {
        assert.equal(yukuTransform(testCase, "zimmerframe"), yukuTransform(testCase));
    });
}

for (const testCase of [...CASES, ...UPSTREAM_CORPUS.cases, ...WALKER_CASES]) {
    test(`SWC Next walkers match for ${testCase.name}`, () => {
        assert.equal(swcNextTransform(testCase, "zimmerframe"), swcNextTransform(testCase, "yuku"));
    });
}

for (const testCase of CASES) {
    test(`Yuku matches Babel for ${testCase.name}`, () => {
        assert.equal(normalize(yukuTransform(testCase)), normalize(babelTransform(testCase)));
    });
}

assert.equal(UPSTREAM_CORPUS.upstream, "styled-components/babel-plugin-styled-components");
assert.equal(UPSTREAM_CORPUS.upstreamCommit, "ab3aaf50921075b219718f9357abd4fae4bcb9b7");
assert.equal(UPSTREAM_CORPUS.version, "2.3.0");
assert.equal(UPSTREAM_CORPUS.cases.length, 48);

for (const fixture of UPSTREAM_CORPUS.cases) {
    test(`Yuku matches upstream fixture ${fixture.name}`, () => {
        const filename = join(
            process.cwd(),
            "test/fixtures/babel-plugin-styled-components",
            fixture.name,
            "code.js",
        );
        const testCase: ParityCase = { ...fixture, filename };
        const babelOutput = babelTransform(testCase);
        const yukuOutput = yukuTransform(testCase);
        assert.equal(
            yukuOutput.match(/#__PURE__/g)?.length ?? 0,
            babelOutput.match(/#__PURE__/g)?.length ?? 0,
        );
        assert.equal(
            normalize(yukuOutput, { canonicalPrivateNames: true, comments: false }),
            normalize(babelOutput, { canonicalPrivateNames: true, comments: false }),
        );
    });
}
