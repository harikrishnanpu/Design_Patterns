class HeavyImage {
  constructor(filename) {
    this.filename = filename;
    this.loadFromDisk();
  }
  loadFromDisk() {
    console.log(`Loading ${this.filename} from disk...`);
  }
  display() {
    console.log(`Displaying ${this.filename}`);
  }
}

class ImageProxy {
  constructor(filename) {
    this.filename = filename;
    this.realImage = null;
  }
  display() {
    if (!this.realImage) {
      this.realImage = new HeavyImage(this.filename); 
    }
    this.realImage.display();
  }
}

const img = new ImageProxy("photo.png");
console.log("Image created, but not loaded yet.");
img.display();
img.display();
