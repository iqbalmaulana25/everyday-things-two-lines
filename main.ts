// Everyday Things, Two Lines, Longer Run
// Writes a two-line explanation to /output/entry.txt
// (MAKEFUN_OUTPUT_DIR overrides /output).
// Gate: UTF-8 text, 1..400 characters, exactly two lines.
import { mkdirSync, writeFileSync } from "node:fs";

const line1 =
  "A toaster is a tiny sun trapped in a metal box that turns bread brown by staring at it really hard.";
const line2 =
  "It maps the heat and the waiting, but leaves out the part where the sun never pops up screaming when it's done.";
const text = `${line1}\n${line2}`;

if (text.split("\n").length !== 2 || text.trim().length === 0 || text.length + 1 > 400) {
  throw new Error(`entry breaks the gate: ${text.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, text + "\n", "utf8");
console.log(text);
