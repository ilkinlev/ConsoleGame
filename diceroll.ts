import { battle } from "./battle";
import { delay, waitForEnter } from "./console";
import { Dragon, Goblin, Player, Orc, Troll, Knight } from "./character";

export async function rollDice(sides: number): Promise<number> {
  return Math.floor(Math.random() * sides) + 1;
}

let player = new Player("Player1", 100, 10, new Knight());

export async function gameloop() {
  while (true) {
    console.log("Press Enter to roll the dice. Type 'exit' to quit.");
    const userInput = await waitForEnter();

    if (userInput.toLowerCase() === "exit") {
      break;
    }

    const result = await rollDice(6);
    console.log(`You rolled a ${result}`);

    if (result === 4) {
      console.clear();
      console.log("Monster appears!");
      await delay(1000);
      await battle(player, getRandomEnemy());
    } else if (result === 3) {
      console.log("You Found Chest!\n");
    }
  }
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function getRandomEnemy() {
  const enemyList = [Goblin, Orc, Troll, Dragon];
  const enemy = enemyList[getRandomInt(enemyList.length)];
  
  return new enemy(100, 10);
}