import { rollDiceAndInteract } from "./diceroll";
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const rl = readline.createInterface({ input, output });
export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function runApp() {
  console.log("Welcome to Dungeon game!");
  await delay(1000);
  await rollDiceAndInteract();
}
runApp().catch((error) => {
  console.error(error);
});
