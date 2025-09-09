class FastestRoute {
  calculate(from, to) { console.log(`Calculating fastest route from ${from} to ${to}`); }
}

class ShortestRoute {
  calculate(from, to) { console.log(`Calculating shortest route from ${from} to ${to}`); }
}

class Navigator {
  setStrategy(strategy) { this.strategy = strategy; }
  navigate(from, to) { this.strategy.calculate(from, to); }
}

const navigator = new Navigator();

navigator.setStrategy(new FastestRoute());
navigator.navigate("A", "B");

navigator.setStrategy(new ShortestRoute());
navigator.navigate("A", "B");
