class Car {
  constructor(type) {
    this.type = type;
  }
}

class CarFactory {
  createCar(type) {
    if (type === "sedan") return new Car("Sedan");
    if (type === "suv") return new Car("SUV");
    return null;
  }
}


const factory = new CarFactory();
const car1 = factory.createCar("sedan");
const car2 = factory.createCar("suv");

console.log(car1, car2);
