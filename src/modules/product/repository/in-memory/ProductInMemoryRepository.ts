import { ICreateProductDTO } from "../../dtos/CreateProductDTO";
import { Product } from "../../infra/entities/Product";
import { IProductsRepository } from "../IProductRepository";

export class ProductRepositoryInMemory implements IProductsRepository {
  products: Product[] = [];

  async create(data: ICreateProductDTO): Promise<void> {
    const product = new Product();
    Object.assign(product, data);

    this.products.push(product);
  }
  async findById(id: string): Promise<Product> {
    const product = this.products.find((product) => product.id === id);
    return product;
  }
  async list(): Promise<Product[]> {
    return this.products;
  }
}
