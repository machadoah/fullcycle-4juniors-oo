import { randomUUID } from "node:crypto";

class Product {
  id: string = randomUUID();

  constructor(
    public name: string,
    public price: number,
    public description: string,
  ) {}
}

type Item = {
  product: Product;
  quantity: number;
};

class Address {
  constructor(
    public street: string,
    public number: number,
    public city: string,
    public state: string,
  ) {}
}

class Client {
  id: string = randomUUID();

  constructor(
    public name: string,
    public email: string,
    public document: string,
    public address: Address,
  ) {}
}

interface PaymentInterface {
  id: string;
  amount: number;
  date: Date;
}

class PixPayment implements PaymentInterface {
  id: string = randomUUID();

  constructor(
    public amount: number,
    public date: Date,
  ) {}
}

class Sale {
  id: string = randomUUID();

  constructor(
    public client: Client,
    public payment: PaymentInterface,
    public products: Item[],
  ) {}
}

const sale = new Sale(
  new Client(
    "Antonio",
    "antonio@email.com",
    "12345678909",
    new Address("Rua A", 123, "NuevaIol", "NY"),
  ),
  new PixPayment(100, new Date()),
  [
    { product: new Product("Sabão", 10, "Neutro"), quantity: 2 },
    { product: new Product("Macarrão", 5.2, "Gravata"), quantity: 1 },
  ],
);

console.log(sale);

export {};
