import { Product } from "../entities/Product";

interface IProductRepository {
  create(): Promise<void>;
  findById(): Promise<Product>;
  list(): Promise<Product[]>;
}
