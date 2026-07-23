class User {
  constructor(public age: number) {
    if (!(age >= 18 && age <= 65)) {
      throw new Error("Idade fora do range da aplicação.");
    }
  }
}

// const user1 = new User(14);
const user2 = new User(54);

// console.log(user1);
console.log(user2);

export {};
