class WinButton { click() { console.log("Windows button clicked"); } }
class MacButton { click() { console.log("Mac button clicked"); } }

class WinCheckbox { check() { console.log("Windows checkbox checked"); } }
class MacCheckbox { check() { console.log("Mac checkbox checked"); } }

class GUIFactory {
  createButton() {}
  createCheckbox() {}
}

class WinFactory extends GUIFactory {
  createButton() { return new WinButton(); }
  createCheckbox() { return new WinCheckbox(); }
}

class MacFactory extends GUIFactory {
  createButton() { return new MacButton(); }
  createCheckbox() { return new MacCheckbox(); }
}


function app(factory) {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox();
  button.click();
  checkbox.check();
}

app(new WinFactory());
app(new MacFactory());
