// Office Joke Open — one-line office joke.
// The program writes the joke to $MAKEFUN_OUTPUT_DIR/entry.txt
// (fallback /output/entry.txt), exactly as the grader expects.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My access badge still shows my 2019 photo. Security waves the photo in every morning — it's me they keep stopping.";

// Gate: the scorer requires UTF-8 text of 1 to 200 characters,
// a single line, not only white space. Count code points so the
// em dash is one character, the way the scorer counts it.
const len = [...LINE].length;
if (len < 1 || len > 200) throw new Error(`line is ${len} chars, gate is 1-200`);
if (LINE.includes("\n") || LINE.trim().length === 0)
  throw new Error("line must be a single non-blank line");

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
