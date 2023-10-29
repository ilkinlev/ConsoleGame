import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

//Character and Enemy classes
class Knight {
  charactername: string;
  hitPoint: number;
  damage: number;
  self: string;
  constructor(Hero: string, HP: number, DMG: number, self: string) {
    this.charactername = Hero;
    this.hitPoint = HP;
    this.damage = DMG;
    this.self = self;
  }
}
const Knightstats = new Knight("Knight", 200, 15, "valiant");
//!
class Wizard {
  charactername: string;
  hitPoint: number;
  damage: number;
  self: string;
  constructor(Hero: string, HP: number, DMG: number, self: string) {
    this.charactername = Hero;
    this.hitPoint = HP;
    this.damage = DMG;
    this.self = self;
  }
}
const Wizardstats = new Wizard("Wizard", 100, 20, "wise");
//!
class Goblin {
  charactername: string;
  hitPoint: number;
  damage: number;
  constructor(Hero: string, HP: number, DMG: number) {
    this.charactername = Hero;
    this.hitPoint = HP;
    this.damage = DMG;
  }
}
const Goblinstats = new Goblin("Goblin", 90, 8);
//!
class Potion {
  charactername: string;
  value: number;
  constructor(name: string, value: number) {
    this.charactername = name;
    this.value = value;
  }
}
const potion = new Potion("Health Pot", 25);
class betterSword {
  name: string;
  damage: number;
  constructor(name: string, damage: number) {
    this.name = name;
    this.damage = damage;
  }
}
//this function is clearing console screen
async function clearScreen() {
  const clearChar = process.platform === "win32" ? "\x1Bc" : "\x1B[2J";
  process.stdout.write(clearChar);
}
//This is main game engine user play with this system
async function main() {
  const rl = readline.createInterface({ input, output });

  //start menu
  await rl.question(
    "Welcome to test Game! press enter button to open character menu "
  );
  //enter nickname
  const nickname = await rl.question("Enter nickname: ");
  //selecting class
  const selectClass = await rl.question(
    `${nickname} select class: \n ${Knightstats.charactername} HP:${Knightstats.hitPoint} DMG:${Knightstats.damage} \n ${Wizardstats.charactername} HP:${Wizardstats.hitPoint} DMG:${Wizardstats.damage} \n `
  );
  // Store user's selected character
  let playerCharacter;

  if (selectClass === "1") {
    playerCharacter = new Knight(
      Knightstats.charactername,
      Knightstats.hitPoint,
      Knightstats.damage,
      Knightstats.self
    );
    console.log(`${nickname} selected ${Knightstats.charactername}`);
  } else if (selectClass === "2") {
    playerCharacter = new Wizard(
      Wizardstats.charactername,
      Wizardstats.hitPoint,
      Wizardstats.damage,
      Wizardstats.self
    );
    await clearScreen();

    console.log(`${nickname} selected ${Wizardstats.charactername}`);
  } else {
    console.log("Invalid selection. Please choose a valid class (1 or 2).");
    rl.close();
    return;
  }
  //starting game
  await rl.question(
    `Your name: ${nickname} and class: ${playerCharacter.charactername} \nPress enter button to start game!`
  );
  //after entering and selecting class clear console screen
  await clearScreen();
  // Narrative story based on character class
  await rl.question(
    `Once upon a time, in a land known as Evergreen, there lived a ${playerCharacter.self} and noble ${playerCharacter.charactername} named ${nickname}. He was known throughout the kingdom as the protector of the realm, a man of unwavering courage and loyalty.${nickname}'s story as a ${playerCharacter.charactername} reflects the ideals of honor, courage, and selfless service that are associated with this noble class. It's a story of a hero who stood as a beacon of hope and protection in a realm filled with challenges and darkness. `
  );
  await clearScreen();

  await rl.question(
    `${nickname} You are currently in Uorla city.The guild master called you for a important quest.You have to go Bureo cave and explore suspicious things \nPress any button to continue`
  );

  while (playerCharacter.hitPoint > 0 && Goblinstats.hitPoint > 0) {
    console.log("Player's Turn:");
    console.log(`1. Attack`);
    console.log(`2. Defend`);
    console.log(`3. Use Health Potion`);
    const playerChoice = await rl.question("Enter your choice (1, 2, or 3): ");

    if (playerChoice === "1") {
      const playerDamage = playerCharacter.damage;
      Goblinstats.hitPoint -= playerDamage;
      console.log(
        `${nickname} attacks the ${Goblinstats.charactername} for ${playerDamage} damage.`
      );
      await clearScreen();
    } else if (playerChoice === "2") {
      playerCharacter.hitPoint += Goblinstats.damage / 2;
      console.log(
        `${nickname} defends and gains ${Goblinstats.damage / 2} HP.`
      );
    } else if (playerChoice === "3") {
      playerCharacter.hitPoint += potion.value;
      console.log(
        `${nickname} uses the Health Potion and gains ${potion.value} HP.`
      );
    } else {
      console.log(
        "Invalid choice. Please choose 1 (Attack), 2 (Defend), or 3 (Use Health Potion)."
      );
    }

    if (Goblinstats.hitPoint <= 0) {
      console.log(`The ${Goblinstats.charactername} has been defeated!`);
      break;
    }
    console.log(
      `The ${Goblinstats.charactername} has ${Goblinstats.hitPoint} HP remaining.`
    );

    const enemyDamage = Goblinstats.damage;
    playerCharacter.hitPoint -= enemyDamage;
    console.log(
      `The ${Goblinstats.charactername} attacks ${nickname} for ${enemyDamage} damage.`
    );
    console.log(`${nickname} has ${playerCharacter.hitPoint} HP remaining.`);

    if (playerCharacter.hitPoint <= 0) {
      console.log(
        `${nickname} has been defeated by the ${Goblinstats.charactername}.`
      );
      break;
    }
  }

  if (playerCharacter.hitPoint <= 0) {
    console.log("Game Over. You have been defeated!");
  } else {
    console.log("Victory! You have defeated the enemy.");
  }
  rl.close();
}

main().catch((error) => {
  console.error(error);
});
