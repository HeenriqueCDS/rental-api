import { Rental } from "../entities/rental";
import { IBaseRepository } from "./base-repository";

type IRentalRepository = IBaseRepository<Rental>;

export { IRentalRepository };
