class Subject {
  constructor() { this.observers = []; }
  subscribe(observer) { this.observers.push(observer); }
  unsubscribe(observer) { this.observers = this.observers.filter(o => o !== observer); }
  notify(data) { this.observers.forEach(o => o.update(data)); }
}

class Observer {
  constructor(name) { this.name = name; }
  update(data) { console.log(`${this.name} received update: ${data}`); }
}


const channel = new Subject();
const user1 = new Observer("Alice");
const user2 = new Observer("Bob");

channel.subscribe(user1);
channel.subscribe(user2);

channel.notify("New Video Released!");
