class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;

        console.log(`User "${this.name}" created`)
    }
}

const user1 = new User('Antonio', 20);
