export class User {
    constructor(
        private name: string, 
        private age: number,
        private address: Address // Um outro tipo de objeto compoe esse
    ) {
       console.log(`User ${this.name} created.\nAddress: ${this.address.streetAddress}`) 
    }
}

// Endereco faz parte do tipo usuário
export class Address {
    constructor(
        private street: string,
        private city: string,
        private number?: number,
    ) {
        console.log(`Address ${this.street} created.`)
    }

    get streetAddress(): string {
        return this.street
    }
}

const a = new Address('Rua 51', 'RJ', 123456)

new User('Antonio', 20, a);
