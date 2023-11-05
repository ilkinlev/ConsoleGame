import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { Goblin, Knight } from "./character";

let Player = new Knight("Emre", 100, 5);
let Enemy = new Goblin("Berat", 70, 3);

async function clearScreen() {
  const clearChar = process.platform === "win32" ? "\x1Bc" : "\x1B[2J";
  process.stdout.write(clearChar);
}
async function main() {
  const rl = readline.createInterface({ input, output });

  await rl.question(
    "Welcome to the Dungeon game\nPress enter to start the game!"
  );
  while (Player.hitPoint > 0 && Enemy.hitPoint > 0) {
    console.log(`${Player.name} HP: ${Player.hitPoint}`);
    console.log(`${Enemy.name} HP: ${Enemy.hitPoint}`);
    console.log("Player's Turn:");
    console.log("1. Attack");
    console.log("2. Defend");

    const playerChoice = await rl.question("Enter your choice (1, 2): ");
    await clearScreen();

    if (playerChoice === "1") {
      const playerDamage = Player.damage;
      Enemy.hitPoint -= playerDamage;
      await clearScreen();

      console.log(
        `${Player.name} attacks ${Enemy.name} for ${playerDamage} damage.`
      );
    } else if (playerChoice === "2") {
      Player.hitPoint += Enemy.damage / 2;
      await clearScreen();
      console.log(`${Player.name} defends and gains ${Enemy.damage / 2} HP.`);
    } else {
      await clearScreen();
      console.log("Invalid choice.\nPlease choose 1 (Attack) or 2 (Defend).");
    }

    if (Enemy.hitPoint <= 0) {
      await clearScreen();
      console.log("Victory! You have defeated the enemy.");
    } else {
      // Enemy's Turn
      const enemyDamage = Enemy.damage;
      Player.hitPoint -= enemyDamage;
      console.log(
        `${Enemy.name} attacks ${Player.name} for ${enemyDamage} damage.`
      );

      if (Player.hitPoint <= 0) {
        console.log(`${Player.name} has been defeated by ${Enemy.name}.`);
      }
    }
  }
  rl.close();
}

main().catch((error) => {
  console.error(error);
});
