import { v4 as uuid } from "uuid";

import { ICreateStationDTO } from "../dtos/create-station-dto";

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

  constructor({
    address,
    capacity,
    description,
    latitude,
    longitude,
    name,
  }: ICreateStationDTO) {
    this.address = this.address ?? address;
    this.capacity = this.capacity ?? capacity;
    this.description = this.description ?? description;
    this.latitude = this.latitude ?? latitude;
    this.longitude = this.longitude ?? longitude;
    this.name = this.name ?? name;
    this.id = this.id ?? uuid();
    this.createdAt = this.createdAt ?? new Date();
  }
}

export { Station };
