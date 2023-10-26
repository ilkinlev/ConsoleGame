import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

//Character and Enemy classes
class Knight {
  cname: string;
  hitPoint: number;
  damage: number;
  self: string;
  constructor(Hero: string, HP: number, DMG: number, self: string) {
    this.cname = Hero;
    this.hitPoint = HP;
    this.damage = DMG;
    this.self = self;
  }
}
const Kstats = new Knight("Knight", 200, 15, "valiant");
class Wizard {
  cname: string;
  hitPoint: number;
  damage: number;
  self: string;
  constructor(Hero: string, HP: number, DMG: number, self: string) {
    this.cname = Hero;
    this.hitPoint = HP;
    this.damage = DMG;
    this.self = self;
  }
}
const Wstats = new Wizard("Wizard", 100, 20, "wise");
class Goblin {
  cname: string;
  hitPoint: number;
  damage: number;
  constructor(Hero: string, HP: number, DMG: number) {
    this.cname = Hero;
    this.hitPoint = HP;
    this.damage = DMG;
  }
}
const Gstats = new Goblin("Goblin", 90, Math.floor(Math.random() * 10) + 1);
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
    "Welcome to test Game! press any button to open character menu "
  );
  //enter nickname
  const nickname = await rl.question("Enter nickname: ");
  //selecting class
  const selectClass = await rl.question(
    `${nickname} select class: \n ${Kstats.cname} HP:${Kstats.hitPoint} DMG:${Kstats.damage} \n ${Wstats.cname} HP:${Wstats.hitPoint} DMG:${Wstats.damage} \n `
  );
  //this contains data which one user select character
  let playerCharacter;

  if (selectClass === "1") {
    playerCharacter = new Knight(
      Kstats.cname,
      Kstats.hitPoint,
      Kstats.damage,
      Kstats.self
    );
    console.log(`${nickname} selected ${Kstats.cname}`);
  } else if (selectClass === "2") {
    playerCharacter = new Wizard(
      Wstats.cname,
      Wstats.hitPoint,
      Wstats.damage,
      Wstats.self
    );
    console.log(`${nickname} selected ${Wstats.cname}`);
  } else {
    console.log("Invalid selection. Please choose a valid class (1 or 2).");
    rl.close();
    return;
  }
  //starting game!
  await rl.question(
    `Your name: ${nickname} and class: ${playerCharacter.cname} Press any button to start game!`
  );
  //after entering and selecting class clear console screen
  await clearScreen();

  await rl.question(
    `Once upon a time, in a land known as Evergreen, there lived a ${playerCharacter.self} and noble ${playerCharacter.cname} named ${nickname}. He was known throughout the kingdom as the protector of the realm, a man of unwavering courage and loyalty.${nickname}'s story as a ${playerCharacter.cname} reflects the ideals of honor, courage, and selfless service that are associated with this noble class. It's a story of a hero who stood as a beacon of hope and protection in a realm filled with challenges and darkness. `
  );

  rl.close();
}

main().catch((error) => {
  console.error(error);
});
