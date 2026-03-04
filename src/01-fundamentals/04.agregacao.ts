export class User {
    constructor(
        private name: string,
        private age: number,
        private address: Address[] // Um usuário possui varios enderecos
    ){}

    get addresses(): Address[] {
        return this.address
    }

    showAdress(): void {
        console.log(`${this.name} address:`)

        this.addresses.forEach((a) => {
            console.log(`Street: ${a.street} - Number: ${a.number}`)
        } )
    }
}


export class Address {
    constructor(
        public street: string,
        public number: number,
    ){}
}

const u = new User('Antonio', 20, [
    new Address('Rua A', 1),
    new Address('Rua B', 2),
    new Address('Rua C', 3),
])

u.showAdress()