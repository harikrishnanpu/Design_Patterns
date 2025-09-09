class OldPaymentSystem {
  payInRupees(amount) {
    console.log(`Paid ₹${amount}`);
  }
}

class NewPaymentSystem {
  payInDollars(amount) {
    console.log(`Paid $${amount}`);
  }
}

class PaymentAdapter {
  constructor(newSystem) {
    this.newSystem = newSystem;
  }
  payInRupees(amount) {
    const dollars = amount / 80; 
    this.newSystem.payInDollars(dollars);
  }
}


const newSystem = new NewPaymentSystem();
const adapter = new PaymentAdapter(newSystem);

adapter.payInRupees(800);
