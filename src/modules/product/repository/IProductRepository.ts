import { ICreateProductDTO } from "../dtos/CreateProductDTO";
import { Product } from "../infra/entities/Product";

interface IProductsRepository {
  create(data: ICreateProductDTO): Promise<void>;
  findById(id: string): Promise<Product>;
  list(): Promise<Product[]>;
}

export { IProductsRepository };
