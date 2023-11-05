interface characterStats {
  name: string;
  hitPoint: number;
  damage: number;
}

export class Knight implements characterStats {
  constructor(
    public name: string,
    public hitPoint: number,
    public damage: number
  ) {
    this.name = name;
    this.hitPoint = hitPoint;
    this.damage = damage;
  }
}
export class Goblin implements characterStats {
  constructor(
    public name: string,
    public hitPoint: number,
    public damage: number
  ) {
    this.name = name;
    this.hitPoint = hitPoint;
    this.damage = damage;
  }
}
