class Handler {
  setNext(handler) { this.next = handler; return handler; }
  handle(request) {
    if (this.next) return this.next.handle(request);
    return null;
  }
}

class Level1 extends Handler {
  handle(request) {
    if (request <= 10) return `Level1 handled ${request}`;
    return super.handle(request);
  }
}

class Level2 extends Handler {
  handle(request) {
    if (request <= 20) return `Level2 handled ${request}`;
    return super.handle(request);
  }
}

const l1 = new Level1();
const l2 = new Level2();
l1.setNext(l2);

console.log(l1.handle(5));  
console.log(l1.handle(15));
