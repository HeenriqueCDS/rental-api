import { PrismaClient } from "@prisma/client";

import { Station } from "../../../domain/entities/station";
import { IStationRepository } from "../../../domain/repositories/station-repository";

class StationRepository implements IStationRepository {
  private client: PrismaClient;

  constructor(client: PrismaClient) {
    this.client = client;
  }
  async update(entity: Station): Promise<void> {
    await this.client.station.update({
      where: { id: entity.id },
      data: { ...entity, updatedAt: new Date() },
    });
  }
  async findById(id: string): Promise<Station> {
    const station = await this.client.station.findFirst({ where: { id } });
    return station;
  }
  async findAll(): Promise<Station[]> {
    const stations = await this.client.station.findMany();
    return stations;
  }
  async save(entity: Station): Promise<void> {
    await this.client.station.create({ data: entity });
  }
  async delete(id: string): Promise<void> {
    await this.client.station.delete({ where: { id } });
  }
}

export { StationRepository };
