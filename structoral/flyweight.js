class TreeType {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  draw(x, y) {
    console.log(`Drawing ${this.name} at (${x},${y}) with color ${this.color}`);
  }
}

class TreeFactory {
  constructor() { this.treeTypes = {}; }
  getTreeType(name, color) {
    const key = name + color;
    if (!this.treeTypes[key]) {
      this.treeTypes[key] = new TreeType(name, color);
    }
    return this.treeTypes[key];
  }
}

const factory = new TreeFactory();
const tree1 = factory.getTreeType("Oak", "Green");
const tree2 = factory.getTreeType("Oak", "Green"); 

tree1.draw(10, 20);
tree2.draw(30, 40);

console.log(tree1 === tree2); 
