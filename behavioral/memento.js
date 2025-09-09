class Memento {
  constructor(state) { this.state = state; }
  getState() { return this.state; }
}

class Editor {
  constructor() { this.content = ""; }
  type(words) { this.content += words; }
  save() { return new Memento(this.content); }
  restore(memento) { this.content = memento.getState(); }
}

const editor = new Editor();
editor.type("Hello ");
const saved = editor.save(); 

editor.type("World!");
console.log(editor.content); 

editor.restore(saved);
console.log(editor.content); 
