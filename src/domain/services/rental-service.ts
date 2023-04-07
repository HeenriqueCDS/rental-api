import { Rental } from "../entities/rental";
import { IBaseService } from "./base-service";

type RentalService = IBaseService<Rental> & {
  create(rental: Rental): Promise<void>;
};

export { RentalService };
