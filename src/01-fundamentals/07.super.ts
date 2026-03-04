class User {
    constructor(
        public name: string,
        public age: number,
        public email: string,
        public password: string,
    ){}
}

class Manager extends User {
    constructor(
        public name: string,
        public age: number,
        public email: string,
        public password: string,
        public role: string = 'super_manager', // campo adicional
    ){
        super(name, age, email, password) // chama o construtor da classe (pai) User
    }
}

class Admin extends User {}

const m = new Manager('John Doe', 30, 'john@example.com', 'password')
console.log(m)

const ms = new Manager('Johne Doi', 31, 'joohne@example.com', 'password', 'mestre')
console.log(ms)
