import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { clear } from "node:console";
import { Knight } from "./character";

//! Clearscreen function
async function clearScreen() {
  const clearChar = process.platform === "win32" ? "\x1Bc" : "\x1B[2J";
  process.stdout.write(clearChar);
}
//! Game engine works here
async function main() {
  const rl = readline.createInterface({ input, output });

  await rl.question("Welcome the Dungeon game\n Press enter to start game!");

  rl.close();
}

main().catch((error) => {
  console.error(error);
});
