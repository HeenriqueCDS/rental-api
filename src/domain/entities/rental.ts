import { v4 as uuid } from "uuid";

class Rental {
  id: string;
  bikeId: string;
  userId: string;
  start: Date;
  previewedEnd: Date;
  end?: Date | null;
  createdAt: Date;
  updatedAt?: Date | null;

  constructor() {
    this.id = this.id ?? uuid();
    this.createdAt = this.createdAt ?? new Date();
  }
}

export { Rental };
