export class Manager {
  constructor(
    protected name: string,
    protected age: number
  ) {}

  getReportsEmployees(): void {
    console.log(`${this.name} -> getReportsEmployees`);
  }
}

export class Admin {
  constructor(
    protected name: string,
    protected age: number
  ) {}

  getReportsEmployees(): void {
    console.log(`getReportsEmployees`);
  }

  getReportsAdmins(): void {
    console.log(`getReportsAdmins`);
  }
}

const m = new Manager("John", 20);
m.getReportsEmployees();

const a = new Admin("Jane", 21);
a.getReportsAdmins();
a.getReportsEmployees();