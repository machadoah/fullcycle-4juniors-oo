export class User {
  static systemName: string = "FC Juniors System";
  private static count = 0;

  constructor(public name: string) {
    User.count++;
    console.log(`User created. Total users: ${User.count}`);
  }

  static getUserCount(): number {
    return User.count;
  }
}

const u = new User("John Doe");
console.log(u.name);

// Acessando o membro estático sem instanciar a classe
console.log(User.systemName);

// Chamando o método estático
console.log(`Total users created: ${User.getUserCount()}`);
