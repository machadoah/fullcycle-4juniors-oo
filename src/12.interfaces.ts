import { customAlphabet } from "nanoid";

const firstChar = customAlphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 1);

const otherChars = customAlphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", 9);

const generateId = () => {
  return firstChar() + otherChars();
};

type StatusPayment = {
  message: "success" | "fail";
};

interface ProcessPaymentInterface {
  readonly taxRate: number; // readonly set final value
  startPayment(amount: number): Promise<string>;
  confirmPayment(id: string): Promise<StatusPayment>;
  cancelPayment(id: string): Promise<StatusPayment>;
  getPaymentStatus(id: string): Promise<StatusPayment>;
}

class PixPayment implements ProcessPaymentInterface {
  taxRate: number = 0.0;

  async startPayment(amount: number): Promise<string> {
    return Promise.resolve(generateId());
  }

  async confirmPayment(id: string): Promise<StatusPayment> {
    return Promise.resolve({ message: "success" });
  }

  async cancelPayment(id: string): Promise<StatusPayment> {
    return Promise.resolve({ message: "fail" });
  }

  async getPaymentStatus(id: string): Promise<StatusPayment> {
    return Promise.resolve({ message: "success" });
  }
}

class MercadoPagoPayment implements ProcessPaymentInterface {
  taxRate: number = 0.2;

  async startPayment(amount: number): Promise<string> {
    return Promise.resolve(generateId());
  }

  async confirmPayment(id: string): Promise<StatusPayment> {
    return Promise.resolve({ message: "success" });
  }

  async cancelPayment(id: string): Promise<StatusPayment> {
    return Promise.resolve({ message: "fail" });
  }

  async getPaymentStatus(id: string): Promise<StatusPayment> {
    return Promise.resolve({ message: "success" });
  }
}

const processPayment = async (payment: ProcessPaymentInterface) => {
  // payment is ProcessPaymentInterface implementations
  const idPayment = await payment.startPayment(1000);
  console.log(`Payment started with id: ${idPayment}`);

  const statusPayment = await payment.getPaymentStatus(idPayment);
  console.log(`Payment status "${statusPayment.message}"`);
};

const pix = new PixPayment();
processPayment(pix);

const mp = new MercadoPagoPayment();
processPayment(mp);
