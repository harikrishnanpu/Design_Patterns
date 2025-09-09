class Coffee {
  cost() { return 5; }
  description() { return "Plain Coffee"; }
}

class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }
  cost() { return this.coffee.cost() + 2; }
  description() { return this.coffee.description() + ", Milk"; }
}

class SugarDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }
  cost() { return this.coffee.cost() + 1; }
  description() { return this.coffee.description() + ", Sugar"; }
}

let myCoffee = new Coffee();
myCoffee = new MilkDecorator(myCoffee);
myCoffee = new SugarDecorator(myCoffee);

console.log(myCoffee.description()); 
console.log("Total cost:", myCoffee.cost());
