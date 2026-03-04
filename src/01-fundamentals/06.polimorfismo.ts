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

export class Employee extends User{
  // o override na frente do método é opcional!
  // sobrescrita de método
    override getReportsEmployees(): void {
      console.log(`${this.name} -> employees call getReportsEmployees`);
  }
}

export class Admin extends User{
  getReportsAdmins(): void {
    console.log(`${this.name} -> getReportsAdmins`);
  }
}

const m = new Manager("John", 20);
m.getReportsEmployees();

const e = new Employee("Employee", 20);
e.getReportsEmployees();

const a = new Admin("Jane", 21);
a.getReportsAdmins();
a.getReportsEmployees();
