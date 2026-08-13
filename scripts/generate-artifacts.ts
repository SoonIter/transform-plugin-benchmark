import { createHash } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import {
  createStyledComponentsFixture,
  STYLED_COMPONENTS_COMPONENT_COUNT,
} from "./styled-components-fixture";
import {
  transformStyledComponentsFor,
  validateStyledComponentsOutput,
  type StyledComponentsTransformerName,
} from "./styled-components-transformers";

const OUTPUT_FILES: ReadonlyArray<readonly [StyledComponentsTransformerName, string]> = [
  ["Babel + JS plugin", "babel-output.jsx"],
  ["SWC + WASM plugin", "swc-output.jsx"],
  ["Yuku + JS plugin", "yuku-output.jsx"],
  ["OXC + Yuku JS plugin", "oxc-output.jsx"],
];

interface ArtifactRecord {
  bytes: number;
  file: string;
  sha256: string;
}

interface OutputArtifactRecord extends ArtifactRecord {
  transformer: StyledComponentsTransformerName;
  validation: ReturnType<typeof validateStyledComponentsOutput>;
}

function artifactRecord(file: string, content: string): ArtifactRecord {
  return {
    bytes: Buffer.byteLength(content),
    file,
    sha256: createHash("sha256").update(content).digest("hex"),
  };
}

async function main(): Promise<void> {
  const fixture = createStyledComponentsFixture(STYLED_COMPONENTS_COMPONENT_COUNT);
  const artifactsPath = join(process.cwd(), "artifacts", "styled-components");
  await mkdir(artifactsPath, { recursive: true });

  const inputFile = "input.jsx";
  await writeFile(join(artifactsPath, inputFile), fixture.source);
  const outputs: OutputArtifactRecord[] = [];
  for (const [transformer, file] of OUTPUT_FILES) {
    const output = transformStyledComponentsFor(transformer, fixture.source);
    const validation = validateStyledComponentsOutput(transformer, output, fixture);
    await writeFile(join(artifactsPath, file), output);
    outputs.push({
      ...artifactRecord(file, output),
      transformer,
      validation,
    });
  }

  const manifest = {
    fixture: {
      cssProps: fixture.cssPropCount,
      styledComponents: fixture.styledComponentCount,
      templates: fixture.templateCount,
      transformedComponents: fixture.transformedComponentCount,
    },
    input: artifactRecord(inputFile, fixture.source),
    outputs,
  };
  await writeFile(
    join(artifactsPath, "manifest.json"),
    `${JSON.stringify(manifest, null, 2)}\n`,
  );
  console.log(`Generated inspectable transform artifacts in ${artifactsPath}`);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
