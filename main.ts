// entry-news25 — ship the bundled news image.
//
// The deliverable is one file: entry.png, dropped into the grader's output
// directory. This script copies the image bundled next to it, byte for byte,
// on every run — no generation step, no randomness, deterministic output.
//
// Output directory selection (first match wins):
//   1. $MAKEFUN_OUTPUT_DIR when set to a non-empty value (resolve() it so
//      relative paths from the caller still work predictably).
//   2. /output — the grading container's mount. Detected by probing
//      /proc/1/comm, which exists on Linux containers but not on macOS or
//      Windows, so local development never touches a privileged path.
//   3. ./out — plain local fallback for manual runs.
//
// Runtime contract: Node 22 standard library only, executed directly with
// `node main.ts` (native TS type-stripping, no build step).

import { copyFile, mkdir, readFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";

/** Walk the fallback chain above and return the chosen output directory. */
async function pickOutputDir(): Promise<string> {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv) return resolve(fromEnv);

  try {
    await readFile("/proc/1/comm", "utf8"); // Linux container probe
    return "/output";
  } catch {
    return "out";
  }
}

// Anchor entry.png to this script's own directory rather than the caller's
// cwd, so the script behaves identically no matter where it is invoked from.
const scriptDir = dirname(new URL(import.meta.url).pathname);
const source = join(scriptDir, "entry.png");

const outDir = await pickOutputDir();
await mkdir(outDir, { recursive: true });
const destination = join(outDir, "entry.png");

await copyFile(source, destination);
console.log("wrote", destination);
