import { createHash } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import {
  loadStyledComponentsCorpus,
  STYLED_COMPONENTS_CORPUS_COMMIT,
  STYLED_COMPONENTS_CORPUS_NAME,
  STYLED_COMPONENTS_CORPUS_REPOSITORY,
} from "./styled-components-corpus";
import {
  transformStyledComponentsCorpusFor,
  validateStyledComponentsOutputs,
  type StyledComponentsOutput,
  type StyledComponentsTransformerName,
} from "./styled-components-transformers";

const REPRESENTATIVE_PATH = "app/components/Button/StyledButton.js";
const OUTPUT_FILES: ReadonlyArray<readonly [StyledComponentsTransformerName, string]> = [
  ["Babel + JS plugin", "babel-output.jsx"],
  ["SWC + WASM plugin", "swc-output.js"],
  ["Yuku + JS plugin", "yuku-output.jsx"],
  ["OXC + Yuku walk plugin", "oxc-output.jsx"],
  ["OXC raw transfer + Yuku walk", "oxc-raw-transfer-output.jsx"],
];

function sha256(content: string): string {
  return createHash("sha256").update(content).digest("hex");
}

function aggregateOutputHash(outputs: StyledComponentsOutput[]): string {
  const hash = createHash("sha256");
  for (const output of outputs) {
    hash.update(output.relativePath);
    hash.update("\0");
    hash.update(output.code);
    hash.update("\0");
  }
  return hash.digest("hex");
}

async function main(): Promise<void> {
  const corpus = loadStyledComponentsCorpus();
  const representative = corpus.files.find(
    (file) => file.relativePath === REPRESENTATIVE_PATH,
  );
  if (representative === undefined) {
    throw new Error(`Missing representative corpus file: ${REPRESENTATIVE_PATH}`);
  }

  const artifactsPath = join(process.cwd(), "artifacts", "styled-components");
  await mkdir(artifactsPath, { recursive: true });
  const inputFile = "input.jsx";
  await writeFile(join(artifactsPath, inputFile), representative.source);

  const outputs = [];
  for (const [transformer, file] of OUTPUT_FILES) {
    const transformed = transformStyledComponentsCorpusFor(transformer, corpus);
    const representativeOutput = transformed.find(
      (output) => output.relativePath === REPRESENTATIVE_PATH,
    );
    if (representativeOutput === undefined) {
      throw new Error(`${transformer} did not produce the representative output`);
    }
    await writeFile(join(artifactsPath, file), representativeOutput.code);
    outputs.push({
      aggregateSha256: aggregateOutputHash(transformed),
      file,
      representativeBytes: Buffer.byteLength(representativeOutput.code),
      representativeSha256: sha256(representativeOutput.code),
      transformer,
      validation: validateStyledComponentsOutputs(transformer, transformed),
    });
  }

  const sourceHash = createHash("sha256");
  for (const corpusFile of corpus.files) {
    sourceHash.update(corpusFile.relativePath);
    sourceHash.update("\0");
    sourceHash.update(corpusFile.source);
    sourceHash.update("\0");
  }
  const manifest = {
    corpus: {
      aggregateSha256: sourceHash.digest("hex"),
      commit: STYLED_COMPONENTS_CORPUS_COMMIT,
      files: corpus.files.length,
      name: STYLED_COMPONENTS_CORPUS_NAME,
      repository: STYLED_COMPONENTS_CORPUS_REPOSITORY,
      sourceBytes: corpus.sourceBytes,
    },
    outputs,
    representativeInput: {
      bytes: Buffer.byteLength(representative.source),
      file: inputFile,
      path: REPRESENTATIVE_PATH,
      sha256: sha256(representative.source),
    },
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
