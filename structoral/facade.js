class CPU {
  freeze() { console.log("CPU frozen"); }
  jump(position) { console.log(`CPU jumps to ${position}`); }
  execute() { console.log("CPU executes"); }
}

class Memory {
  load(position, data) { console.log(`Loaded ${data} at ${position}`); }
}

class HardDrive {
  read(lba, size) { return `Data from sector ${lba}`; }
}


class ComputerFacade {
  constructor() {
    this.cpu = new CPU();
    this.memory = new Memory();
    this.hardDrive = new HardDrive();
  }

  start() {
    this.cpu.freeze();
    const data = this.hardDrive.read(100, 10);
    this.memory.load(0, data);
    this.cpu.jump(0);
    this.cpu.execute();
    console.log("Computer started!");
  }
}


const computer = new ComputerFacade();
computer.start();
