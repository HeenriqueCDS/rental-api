import { v4 as uuid } from "uuid";

import { ICreateRentalDTO } from "../dtos/create-rental-dto";

class Rental {
  id: string;
  bikeId: string;
  userId: string;
  start: Date;
  previewedEnd: Date;
  end?: Date | null;
  createdAt: Date;
  updatedAt?: Date | null;

  constructor({ bikeId, userId, previewedEnd }: ICreateRentalDTO) {
    this.bikeId = this.bikeId ?? bikeId;
    this.userId = this.userId ?? userId;
    this.previewedEnd = this.previewedEnd ?? previewedEnd;

    this.start = this.start ?? new Date();
    this.id = this.id ?? uuid();
    this.createdAt = this.createdAt ?? new Date();
  }
}

export { Rental };
