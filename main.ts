import { mkdirSync, writeFileSync } from "node:fs";

const entry = `chore: require human approval for irreversible actions (I am the human)

Added at 3:01 AM. The check is me. I approved the deploy. I approved the rollback. The on-call is also me. Please advise.`;

try {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", entry, "utf8");
} catch {
  writeFileSync("entry.txt", entry, "utf8");
}
