class Command {
  execute() {}
}

class LightOnCommand extends Command {
  constructor(light) { super(); this.light = light; }
  execute() { this.light.on(); }
}

class LightOffCommand extends Command {
  constructor(light) { super(); this.light = light; }
  execute() { this.light.off(); }
}

class Light {
  on() { console.log("Light is ON"); }
  off() { console.log("Light is OFF"); }
}

 class Remote {
  setCommand(command) { this.command = command; }
  pressButton() { this.command.execute(); }
}

const light = new Light();
const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);

const remote = new Remote();
remote.setCommand(lightOn);
remote.pressButton(); 
remote.setCommand(lightOff);
remote.pressButton();
