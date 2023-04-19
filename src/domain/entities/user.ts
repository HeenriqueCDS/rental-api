import { v4 as uuid } from "uuid";

import { ICreateUserDTO } from "../dtos/create-user-dto";

class User {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt?: Date | null;

  constructor({ email, name, password }: ICreateUserDTO) {
    this.email = this.email ?? email;
    this.name = this.name ?? name;
    this.password = this.password ?? password;
    this.id = this.id ?? uuid();
    this.createdAt = this.createdAt ?? new Date();
  }
}

export { User };
