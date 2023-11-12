import { stdin as input, stdout as output } from "node:process";
import * as readline from "node:readline/promises";
import { Goblin, Knight } from "./character";

async function clearScreen() {
  const clearChar = process.platform === "win32" ? "\x1Bc" : "\x1B[2J";
  process.stdout.write(clearChar);
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function playerTurn(
  player: Knight,
  enemy: Goblin,
  rl: readline.Interface
) {
  console.log(`${player.name} HP: ${player.hitPoint}`);
  console.log(`${enemy.name} HP: ${enemy.hitPoint}`);
  console.log("Player's Turn:");
  console.log("1. Attack");
  console.log("2. Defend");

  const playerChoice = await rl.question("Enter your choice (1, 2): ");
  await clearScreen();

  if (playerChoice === "1") {
    const playerDamage = player.damage;
    enemy.hitPoint -= playerDamage;
    console.log(
      `${player.name} attacks ${enemy.name} for ${playerDamage} damage.`
    );
    await delay(1000);
  } else if (playerChoice === "2") {
    player.hitPoint += enemy.damage / 2;
    await clearScreen();
    console.log(`${player.name} defends and take ${enemy.damage / 2} HP.`);
    await delay(1000);
  } else {
    console.log("Invalid choice.\nPlease choose 1 (Attack) or 2 (Defend).");
    await delay(1000);
  }
}

async function enemyTurn(player: Knight, enemy: Goblin) {
  // Enemy's Turn
  const enemyDamage = enemy.damage;
  player.hitPoint -= enemyDamage;
  console.log(
    `${enemy.name} attacks ${player.name} for ${enemyDamage} damage.`
  );
  await delay(1000);
}

export async function battle() {
  const rl = readline.createInterface({ input, output });
  let player = new Knight("Emre", 100, 50);
  let enemy = new Goblin("Berat", 70, 3);

  while (player.hitPoint > 0 && enemy.hitPoint > 0) {
    await playerTurn(player, enemy, rl);

    if (enemy.hitPoint <= 0) {
      await clearScreen();
      console.log("Victory! You have defeated the enemy.");
    } else {
      await enemyTurn(player, enemy);

      if (player.hitPoint <= 0) {
        console.log(`${player.name} has been defeated by ${enemy.name}.`);
      }
    }
  }

  rl.close();
}
