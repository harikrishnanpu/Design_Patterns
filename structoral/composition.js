class File {
  constructor(name) { this.name = name; }
  display() { console.log(this.name); }
}

class Folder {
  constructor(name) {
    this.name = name;
    this.children = [];
  }
  add(child) { this.children.push(child); }
  display() {
    console.log(this.name);
    this.children.forEach(c => c.display());
  }
}

const file1 = new File("file1.txt");
const file2 = new File("file2.txt");
const folder1 = new Folder("Folder1");

folder1.add(file1);
folder1.add(file2);

const folder2 = new Folder("RootFolder");
folder2.add(folder1);
folder2.display();
