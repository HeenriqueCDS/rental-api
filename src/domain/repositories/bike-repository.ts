import { Bike } from "../entities/bike";
import { IBaseRepository } from "./base-repository";

type IBikeRepository = IBaseRepository<Bike> & {
  findByStationId(stationId: string): Promise<Bike[]>;
};

export { IBikeRepository };
