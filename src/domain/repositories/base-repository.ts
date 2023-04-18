interface IBaseRepository<T> {
  findById(id: string): Promise<T>;

  findAll(): Promise<T[]>;

  save(entity: T): Promise<void>;

  update: (entity: T) => Promise<void>;

  delete(id: string): Promise<void>;
}

export { IBaseRepository };
