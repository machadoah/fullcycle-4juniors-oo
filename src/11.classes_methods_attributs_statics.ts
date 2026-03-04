abstract class Payment {
  // abstract in classes = no is possible instance object with this class
  abstract tax: number; // abstract in variables/attributs/methods = forced classes childrens implementation this value

  constructor(
    public amount: number,
    public date: Date,
    public description: string,
  ) {}

  abstract IOFCalculate(): number;

  getPaymentInfo(): string {
    return `Payment of ${this.amount} with ${this.tax * 100}% tax and ${this.IOFCalculate()} on ${this.date.toDateString()}: ${this.description}`;
  }

  processPayment(): void {
    const newAmount =
      this.amount + this.amount * this.tax + this.IOFCalculate();
    console.log(
      `Processing payment of ${newAmount} -> ${this.getPaymentInfo()}`,
    );
  }
}

class PaymentPix extends Payment {
  tax: number = 0.0;

  IOFCalculate(): number {
    return 0;
  }
}
class PaymentCreditCard extends Payment {
  tax: number = 0.05;
  iofTax: number = 0.0038;

  IOFCalculate(): number {
    return this.amount * this.iofTax;
  }
}
class PaymentDebitCard extends Payment {
  tax: number = 0.06;

  IOFCalculate(): number {
    return 0;
  }
}

const pix = new PaymentPix(100, new Date(), "Payment via Pix");
pix.processPayment();

const cc = new PaymentCreditCard(100, new Date(), "Payment via CC");
cc.processPayment();
