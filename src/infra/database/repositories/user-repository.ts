import { PrismaClient } from "@prisma/client";

import { User } from "../../../domain/entities/user";
import { IUserRepository } from "../../../domain/repositories/user-repository";

class UserRepository implements IUserRepository {
  private client: PrismaClient;

  constructor(client: PrismaClient) {
    this.client = client;
  }
  async update(entity: User): Promise<void> {
    await this.client.user.update({
      where: { id: entity.id },
      data: { ...entity, updatedAt: new Date() },
    });
  }
  async findById(id: string): Promise<User> {
    const user = await this.client.user.findFirst({ where: { id } });
    return user;
  }
  async findAll(): Promise<User[]> {
    const users = await this.client.user.findMany();
    return users;
  }
  async save(entity: User): Promise<void> {
    await this.client.user.create({ data: entity });
  }
  async delete(id: string): Promise<void> {
    await this.client.user.delete({ where: { id } });
  }
}

export { UserRepository };
