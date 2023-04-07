import { v4 as uuid } from "uuid";

class User {
  id: string;
  name: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at?: Date | null;

  constructor() {
    this.id = this.id ?? uuid();
    this.created_at = this.created_at ?? new Date();
  }
}

export { User };
