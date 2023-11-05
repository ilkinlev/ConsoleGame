import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { clear } from "node:console";
//! Game engine works here
async function main() {
  const rl = readline.createInterface({ input, output });

  rl.close();
}
//! Clearscreen function
async function clearScreen() {
  const clearChar = process.platform === "win32" ? "\x1Bc" : "\x1B[2J";
  process.stdout.write(clearChar);
}
main().catch((error) => {
  console.error(error);
});

