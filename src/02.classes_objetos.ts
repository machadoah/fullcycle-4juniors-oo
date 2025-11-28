export class User {
    private name: string; // public (default), private, protected
    private age: number;

    constructor(name: string, age: number) {
        // valida a integridade da idade ao criar objeto
        if (age <= 0 || age > 125) {
            throw new Error('Invalid age!')
        }

        this.name = name;
        this.age = age;

        console.log(`User "${this.name}" created`);
    }

    // changeAge garante a integridade da idade
    changeAge(newAge: number) :void {
        if (newAge <= 0 || newAge > 125) {
            throw new Error('Invalid age!')
        }
        this.age = newAge;
    }
}

const user1 = new User('Antonio', 20);

// user1.changeAge(216) 💣
user1.changeAge(21)

console.log(user1)