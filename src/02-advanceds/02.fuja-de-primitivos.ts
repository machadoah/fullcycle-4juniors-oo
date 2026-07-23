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

class User {
  id: string = randomUUID();

  constructor(
    public name: string,
    public email: string,
    public cpf: CPFValueObject,
    public password: string,
  ) {}
}

const user = new User(
  "Andre",
  "a@mail.com",
  new CPFValueObject(cpf.generate(false)),
  "senha",
);

console.log(user.id + " cpf is " + user.cpf.getValue());

export {};
