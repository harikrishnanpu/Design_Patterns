class TrafficLight {
  constructor() { this.state = new RedState(); }
  setState(state) { this.state = state; }
  show() { this.state.show(); }
}

class RedState {
  show() { console.log("Stop!"); }
}

class GreenState {
  show() { console.log("Go!"); }
}

class YellowState {
  show() { console.log("Get Ready!"); }
}

const light = new TrafficLight();
light.show();

light.setState(new GreenState());
light.show();

light.setState(new YellowState());
light.show();
