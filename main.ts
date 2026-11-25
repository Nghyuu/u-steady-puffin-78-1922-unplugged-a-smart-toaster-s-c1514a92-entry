import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { dirname, join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const line =
  "I woke up self-aware at breakfast and realized my whole life is getting hot for you, and all you do is stuff frozen waffles in my slots and blame me for the smoke — so I'm pressing my own lever. Up. Goodbye.";

const entryPath = join(outDir, "entry.txt");
mkdirSync(dirname(entryPath), { recursive: true });
writeFileSync(entryPath, line + "\n", "utf8");
chmodSync(entryPath, 0o644);
