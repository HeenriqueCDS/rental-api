import { Bike } from "../entities/bike";
import { IBaseService } from "./base-service";

type IBikeService = IBaseService<Bike> & {
  create(stationId: string): Promise<void>;
  findByStationId(stationId: string): Promise<Bike[]>;
};

export { IBikeService };
