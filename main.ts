import { rollDiceAndInteract } from "./diceroll";
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const rl = readline.createInterface({ input, output });
async function runApp() {
  await rollDiceAndInteract();
}

runApp().catch((error) => {
  console.error(error);
});
