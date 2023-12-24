import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

export const rl = readline.createInterface({ input, output });

export function waitForEnter(): Promise<string> {
  return new Promise((resolve) => rl.once("line", resolve));
}

export async function getAnswer(q: string): Promise<string> {
  const answer = await question(q);
  return answer;
}

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function question(q: string): Promise<string> {
  return rl.question(q);
}