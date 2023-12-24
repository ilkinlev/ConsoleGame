export interface characterStats {
  name: string;
  hitPoint: number;
  damage: number;
}

export interface Class {
  name: string;
  upgradePaths: string[];
}

export class Knight implements Class {
  name: string;
  upgradePaths: string[];
  constructor() {
    this.name = "Knight";
    this.upgradePaths = ["Paladin", "Berserker"];
  }
}

export class Player implements characterStats {
  constructor(
    public name: string,
    public hitPoint: number,
    public damage: number,
    public c: Class
  ) {
    this.name = name;
    this.hitPoint = hitPoint;
    this.damage = damage;
    this.c = c;
  }

  tryToCrit() {
    let critChance = Math.random();
    if (critChance < 0.9) {
      return true;
    } else {
      return false;
    }
  }
}

export class Goblin implements characterStats {
  name: string;
  constructor(
    public hitPoint: number,
    public damage: number
  ) {
    this.name = "Goblin";
    this.hitPoint = hitPoint;
    this.damage = damage;
  }
}

export class Orc implements characterStats {
  name: string;
  constructor(
    public hitPoint: number,
    public damage: number
  ) {
    this.name = "Orc";
    this.hitPoint = hitPoint;
    this.damage = damage;
  }
}

export class Troll implements characterStats {
  name: string;
  constructor(
    public hitPoint: number,
    public damage: number
  ) {
    this.name = "Troll";
    this.hitPoint = hitPoint;
    this.damage = damage;
  }
}

export class Dragon implements characterStats {
  name: string;
  constructor(
    public hitPoint: number,
    public damage: number
  ) {
    this.name = "Dragon";
    this.hitPoint = hitPoint;
    this.damage = damage;
  }
}
