import { v4 as uuid } from "uuid";

class User {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt?: Date | null;

  constructor() {
    this.id = this.id ?? uuid();
    this.createdAt = this.createdAt ?? new Date();
  }
}

export { User };
