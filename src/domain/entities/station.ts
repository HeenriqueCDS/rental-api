import { v4 as uuid } from "uuid";

class Station {
  id: string;
  name: string;
  description: string;
  capacity: number;
  address: string;
  latitude: number;
  longitude: number;
  createdAt: Date;
  updatedAt?: Date | null;

  constructor() {
    this.id = this.id ?? uuid();
    this.createdAt = this.createdAt ?? new Date();
  }
}

export { Station };
