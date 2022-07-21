import { ICreateProductDTO } from "../dtos/CreateProductDTO";
import { Product } from "../infra/entities/Product";
import { IProductsRepository } from "./IProductRepository";

export class ProductRepositoryInMemory implements IProductsRepository {
  products: Product[] = [];

  async create(data: ICreateProductDTO): Promise<void> {
    const product = new Product();
    Object.assign(product, data);

    this.products.push(product);
  }
  async findById(): Promise<Product> {
    throw new Error("Method not implemented.");
  }
  async list(): Promise<Product[]> {
    throw new Error("Method not implemented.");
  }
}
