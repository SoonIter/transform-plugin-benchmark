import { readdirSync, readFileSync } from "node:fs";
import { relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

export const STYLED_COMPONENTS_CORPUS_COMMIT =
  "d19099afeff64ecfb09133c06c1cb18c0d40887e";
export const STYLED_COMPONENTS_CORPUS_NAME = "react-boilerplate v4.0.0";
export const STYLED_COMPONENTS_CORPUS_REPOSITORY =
  "https://github.com/react-boilerplate/react-boilerplate";

const CORPUS_ROOT = fileURLToPath(
  new URL("../benchmark/fixtures/react-boilerplate/", import.meta.url),
);
const CORPUS_APP_ROOT = resolve(CORPUS_ROOT, "app");

export interface StyledComponentsCorpusFile {
  filename: string;
  relativePath: string;
  source: string;
}

export interface StyledComponentsCorpus {
  files: StyledComponentsCorpusFile[];
  sourceBytes: number;
}

function listJavaScriptFiles(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true })
    .flatMap((entry) => {
      const path = resolve(directory, entry.name);
      if (entry.isDirectory()) return listJavaScriptFiles(path);
      return entry.isFile() && entry.name.endsWith(".js") ? [path] : [];
    })
    .sort();
}

export function loadStyledComponentsCorpus(): StyledComponentsCorpus {
  const files = listJavaScriptFiles(CORPUS_APP_ROOT).map((filename) => {
    const source = readFileSync(filename, "utf8");
    return {
      filename,
      relativePath: relative(CORPUS_ROOT, filename).replaceAll(sep, "/"),
      source,
    };
  });
  return {
    files,
    sourceBytes: files.reduce(
      (total, file) => total + Buffer.byteLength(file.source),
      0,
    ),
  };
}
