import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// One Word From Your Ex — the word my ex would use to describe me.
// "Prototype": I wasn't the one. I was the test model before the one —
// tried out, notes taken, then replaced by the finished version.
// It stings because it is true, and I know it.
const WORD = "Prototype";

// The gate allows 1–24 characters; refuse to write anything outside it.
if (WORD.length < 1 || WORD.length > 24 || WORD.trim() !== WORD) {
  throw new Error(`entry word must be 1-24 chars, got ${WORD.length}`);
}

const repoDir = dirname(fileURLToPath(import.meta.url));
// The grader sets MAKEFUN_OUTPUT_DIR; fall back to a repo-local output
// dir derived from this file's own URL, never from the working directory.
const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ?? join(repoDir, "output");
mkdirSync(outDir, { recursive: true });
const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, WORD, "utf8");
console.log(`wrote ${WORD.length}-char entry to ${entryPath}`);
