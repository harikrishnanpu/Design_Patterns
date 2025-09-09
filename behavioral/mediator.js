class ChatRoom {
  showMessage(user, message) {
    console.log(`${user.getName()}: ${message}`);
  }
}

class User {
  constructor(name, chatMediator) {
    this.name = name;
    this.chatMediator = chatMediator;
  }
  getName() { return this.name; }
  send(message) { this.chatMediator.showMessage(this, message); }
}


const chatRoom = new ChatRoom();
const user1 = new User("Alice", chatRoom);
const user2 = new User("Bob", chatRoom);

user1.send("Hi Bob!");
user2.send("Hey Alice!");
