import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { info } from "node:console";
//This is main game engine user play with this system
class Knight {
  cname: string;
  hitPoint: number;
  damage: number;
  constructor(Hero: string, HP: number, DMG: number) {
    this.cname = Hero;
    this.hitPoint = HP;
    this.damage = DMG;
  }
}
const Kstats = new Knight("Knight", 200, 15);
class Wizard {
  cname: string;
  hitPoint: number;
  damage: number;
  constructor(Hero: string, HP: number, DMG: number) {
    this.cname = Hero;
    this.hitPoint = HP;
    this.damage = DMG;
  }
}
const Wstats = new Wizard("Wizard", 100, 20);

async function main() {
  const rl = readline.createInterface({ input, output });

  const nickname = await rl.question("Insert nickname: ");

  const selectClass = await rl.question(
    `${nickname} select class: \n ${Kstats.cname} HP:${Kstats.hitPoint} DMG:${Kstats.damage} \n ${Wstats.cname} HP:${Wstats.hitPoint} DMG:${Wstats.damage} `
  );

  rl.close();
}

main().catch((error) => {
  console.error(error);
});
