class heroAttack {
  constructor(name, age, type, gun) {
    this.name = name;
    this.age = age;
    this.type = type;
    this.gun = gun;
  } 

  attack() {
    if(this.name === "ninja") {
      console.log(`O ${this.type} atacou usando ${this.gun}`);
    } else if(this.name === "guerreiro") {
      console.log(`O ${this.type} atacou usando ${this.gun}`);
    } else if(this.name === "mago") {
      console.log(`O ${this.type} atacou usando ${this.gun}`);
    } else {
      console.log(`O ${this.type} atacou usando ${this.gun}`);
    }
  }
}

let hero = new heroAttack("Naruto", 20, "ninja", "shuriken");

hero.attack();


