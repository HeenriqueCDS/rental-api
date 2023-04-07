import { v4 as uuid } from "uuid";

class Rental {
  id: string;
  bikeId: string;
  userId: string;
  start: Date;
  previewedEnd: Date;
  end?: Date | null;
  created_at: Date;
  updated_at?: Date | null;

  constructor() {
    this.id = this.id ?? uuid();
    this.created_at = this.created_at ?? new Date();
  }
}

export { Rental };
