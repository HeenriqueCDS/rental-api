import { v4 as uuid } from "uuid";

class Bike {
  id: string;
  name: string;
  stationId: string;
  status: string;
  createdAt: Date;
  updatedAt?: Date | null;

  constructor({ stationId, name }: { stationId: string; name: string }) {
    this.stationId = this.stationId ?? stationId;
    this.name = this.name ?? name;
    this.id = this.id ?? uuid();
    this.createdAt = this.createdAt ?? new Date();
  }
}

export { Bike };
