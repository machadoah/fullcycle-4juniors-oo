export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private createdAt: Date,
    private updatedAt: Date
  ) {}

  getName(): string {
    return this.name;
  }

  setName(newName: string): void {
    this.name = newName;
  }
}

const u = new User(
  "1",
  "John Doe",
  "john@example.com",
  "password123",
  new Date(),
  new Date()
);

console.log(u);
console.log(u.getName());

u.setName("Jane Doe"); // Atualiza o nome do usuário
console.log(u.getName());
