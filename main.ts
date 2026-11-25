// Famous Last Words: The Funniest Epitaph
// Writes one one-line tombstone epitaph (<= 150 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I asked Death for five more minutes. He said my free trial had expired.";

// Gate assert: 1-150 chars, single line, not only whitespace.
const len = [...ENTRY].length;
if (len < 1 || len > 150) throw new Error(`entry length ${len} outside 1-150`);
if (ENTRY.trim().length === 0) throw new Error("entry is blank");
if (ENTRY.includes("\n")) throw new Error("entry must be a single line");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(ENTRY);
console.log(`chars: ${[...ENTRY].length}`);
