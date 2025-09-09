class Shape {
  constructor(type) {
    this.type = type;
  }

  clone() {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }
}

const circle = new Shape("Circle");
const circle2 = circle.clone();

console.log(circle2.type);      
console.log(circle === circle2);
