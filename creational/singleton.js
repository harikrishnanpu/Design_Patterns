class Database {
  constructor() {
    if (Database.instance) {
      return Database.instance;
    }
    this.connection = "Connected to DB";
    Database.instance = this;
  }

  query(sql) {
    console.log(`Running: ${sql}`);
  }
}

const db1 = new Database();
const db2 = new Database();

console.log(db1 === db2);
console.log(db1)
