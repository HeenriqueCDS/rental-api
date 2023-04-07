import { v4 as uuid } from "uuid";

import { Status } from "../../types/status.enum";

class Bike {
  id: string;
  stationId: string;
  status: Status;
  created_at: Date;
  updated_at?: Date | null;

  constructor(stationId: string) {
    this.stationId = this.stationId ?? stationId;
    this.id = this.id ?? uuid();
    this.created_at = this.created_at ?? new Date();
  }
}

export { Bike };
