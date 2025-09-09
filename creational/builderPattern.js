class Burger {
  constructor() {
    this.parts = [];
  }
  addPart(part) {
    this.parts.push(part);
  }
}

class BurgerBuilder {
  constructor() {
    this.burger = new Burger();
  }
  addBun() { this.burger.addPart("Bun"); return this; }
  addPatty() { this.burger.addPart("Patty"); return this; }
  addCheese() { this.burger.addPart("Cheese"); return this; }
  build() { return this.burger; }
}

const burger = new BurgerBuilder()
  .addBun()
  .addPatty()
  .addCheese()
  .build();

console.log(burger.parts);
