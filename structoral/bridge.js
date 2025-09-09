class TV {
  on() {}
  off() {}
}

class SamsungTV extends TV {
  on() { console.log("Samsung TV ON"); }
  off() { console.log("Samsung TV OFF"); }
}

class SonyTV extends TV {
  on() { console.log("Sony TV ON"); }
  off() { console.log("Sony TV OFF"); }
}

class Remote {
  constructor(tv) { this.tv = tv; }
  turnOn() { this.tv.on(); }
  turnOff() { this.tv.off(); }
}

const samsung = new SamsungTV();
const sony = new SonyTV();

const remote1 = new Remote(samsung);
const remote2 = new Remote(sony);

remote1.turnOn(); 
remote2.turnOff();
