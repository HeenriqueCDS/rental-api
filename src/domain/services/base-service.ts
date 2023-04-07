import { IBaseRepository } from "../repositories/base-repository";

interface IBaseService<T> {
  repository: IBaseRepository<T>;
  findAll(): Promise<T[]>;
  findById(id: string): Promise<T>;
  update(entity: T): Promise<void>;
  delete(id: string): Promise<void>;
}

export { IBaseService };
