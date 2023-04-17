import { PrismaClient } from "@prisma/client";

import { Station } from "../../../domain/entities/station";
import { IStationRepository } from "../../../domain/repositories/station-repository";

class StationRepository implements IStationRepository {
  private client: PrismaClient;

  constructor(client: PrismaClient) {
    this.client = client;
  }
  findById(id: string): Promise<Station> {
    const station = this.client.station.findFirst({ where: { id } });
    return station;
  }
  findAll(): Promise<Station[]> {
    const stations = this.client.station.findMany();
    return stations;
  }
  async save(entity: Station): Promise<void> {
    await this.client.station.create({ data: entity });
  }
  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

export { StationRepository };
