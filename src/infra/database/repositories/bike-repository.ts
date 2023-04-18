import { PrismaClient } from "@prisma/client";

import { Bike } from "../../../domain/entities/bike";
import { IBikeRepository } from "../../../domain/repositories/bike-repository";

class BikeRepository implements IBikeRepository {
  private client: PrismaClient;

  constructor(client: PrismaClient) {
    this.client = client;
  }

  async findById(id: string): Promise<Bike> {
    const bike = await this.client.bike.findFirst({ where: { id } });
    return bike;
  }
  async findAll(): Promise<Bike[]> {
    const bikes = await this.client.bike.findMany();
    return bikes;
  }
  async save(entity: Bike): Promise<void> {
    await this.client.bike.create({ data: entity });
  }

  async update(entity: Bike): Promise<void> {
    await this.client.bike.update({
      where: { id: entity.id },
      data: { ...entity, updatedAt: new Date() },
    });
  }

  async delete(id: string): Promise<void> {
    await this.client.bike.delete({ where: { id } });
  }
  async findByStationId(stationId: string): Promise<Bike[]> {
    const bikes = await this.client.bike.findMany({ where: { stationId } });
    return bikes;
  }
}

export { BikeRepository };
