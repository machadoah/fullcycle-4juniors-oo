import { cpf } from "cpf-cnpj-validator";
import { randomUUID } from "node:crypto";

class CPFValueObject {
  constructor(private value: string) {
    this.validate();
  }

  private validate() {
    if (!cpf.isValid(this.value)) {
      throw new Error("CPF Invalido!");
    }
  }

  public getValue(): string {
    return this.value;
  }
}

enum UserStatus {
  Active = "active",
  Inactive = "inactive",
  Suspended = "suspended",
}

class User {
  id: string = randomUUID();

  constructor(
    public name: string,
    public email: string,
    public cpf: CPFValueObject,
    public password: string,
    public status: UserStatus = UserStatus.Active,
  ) {}
}

const user = new User(
  "Andre",
  "a@mail.com",
  new CPFValueObject(cpf.generate(false)),
  "senha",
);

console.log(user);

export {};
