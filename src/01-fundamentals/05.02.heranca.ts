export class User {
  constructor(
    protected name: string,
    protected age: number
  ) {}

  getReportsEmployees(): void {
    console.log(`${this.name} -> getReportsEmployees`);
  }
}

export class Manager extends User{}

export class Admin extends User{
  getReportsAdmins(): void {
    console.log(`${this.name} -> getReportsAdmins`);
  }
}

const m = new Manager("John", 20);
m.getReportsEmployees();

const a = new Admin("Jane", 21);
a.getReportsAdmins();
a.getReportsEmployees();