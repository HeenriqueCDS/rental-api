import { PrismaClient } from "@prisma/client";

import { Rental } from "../../../domain/entities/rental";
import { IRentalRepository } from "../../../domain/repositories/rental-repository";

class RentalRepository implements IRentalRepository {
  private client: PrismaClient;

  constructor(client: PrismaClient) {
    this.client = client;
  }
  async update(entity: Rental): Promise<void> {
    await this.client.rental.update({
      where: { id: entity.id },
      data: { ...entity, updatedAt: new Date() },
    });
  }
  async findById(id: string): Promise<Rental> {
    const rental = await this.client.rental.findFirst({ where: { id } });
    return rental;
  }
  async findAll(): Promise<Rental[]> {
    const rentals = await this.client.rental.findMany();
    return rentals;
  }
  async save(entity: Rental): Promise<void> {
    await this.client.rental.create({ data: entity });
  }
  async delete(id: string): Promise<void> {
    await this.client.rental.delete({ where: { id } });
  }
}

export { RentalRepository };
