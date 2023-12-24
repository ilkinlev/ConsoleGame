import { delay } from "./console";
import { gameloop } from "./diceroll";
import { rl } from "./console";

async function runApp() {
  console.log("Welcome to Dungeon game!");
  await delay(1000);
  await gameloop();
  rl.close();
}

runApp().catch((error) => {
  console.error(error);
});
