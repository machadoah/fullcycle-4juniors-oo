export class User {
  constructor(
    private id: string,
    private _name: string,
    private _email: string,
    private _password: string,
    private _createdAt: Date,
    private _updatedAt: Date
  ) {}

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    if (newName.length < 3) {
      throw new Error("Name must be at least 3 characters long.");
    }

    this._name = newName;
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

console.log(u.name);

u.name = "Jane Doe"; // Atualiza o nome do usuário
console.log(u.name);
