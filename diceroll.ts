import { battle } from "./battle";
import * as readline from "node:readline/promises";

export async function rollDice(sides: number): Promise<number> {
  return Math.floor(Math.random() * sides) + 1;
}

export async function rollDiceAndInteract(): Promise<void> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log("Press Enter to roll the dice. Type 'exit' to quit.");

  while (true) {
    const userInput = await waitForEnter(rl);

    if (userInput.toLowerCase() === "exit") {
      break;
    }

    const result = await rollDice(6);
    console.log(`You rolled a ${result}`);

    if (result === 4) {
      await battle();
    } else if (result === 3) {
      console.log("You Found Chest!\n");
    }
  }

  rl.close();
}

async function waitForEnter(rl: readline.Interface): Promise<string> {
  return rl.question("");
}
