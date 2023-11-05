interface character {
  HP: number;
  DMG: number;
}
export class Knight implements character {
  HP: number;
  DMG: number;
  constructor(hitPoint: number, damage: number) {
    this.HP = hitPoint;
    this.DMG = damage;
  }
}
