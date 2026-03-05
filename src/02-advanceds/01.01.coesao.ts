import { generateId, NanoID } from "../utils/identification";

class Product {
  constructor(
    public id: NanoID,
    public name: string,
    public price: number,
    public description: string,
  ) {}
}

class Sale {
  constructor(
    public id: NanoID,
    public clientName: string,
    public clientEmail: string,
    public clientDocument: string,
    public paymentPix: string,
    public products: Product[],
    public quantity: number,
  ) {}
}

export {};
