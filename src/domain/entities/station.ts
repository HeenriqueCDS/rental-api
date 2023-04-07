import { v4 as uuid } from "uuid";

class Station {
  id: string;
  name: string;
  description: string;
  capacity: number;
  address: string;
  latitude: number;
  longitude: number;
  created_at: Date;
  updated_at?: Date | null;

  constructor() {
    this.id = this.id ?? uuid();
    this.created_at = this.created_at ?? new Date();
  }
}

export { Station };
