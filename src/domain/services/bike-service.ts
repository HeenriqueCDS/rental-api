import { ICreateBikeDTO } from "../dtos/create-bike-dto";
import { Bike } from "../entities/bike";
import { IBaseService } from "./base-service";

type IBikeService = IBaseService<Bike> & {
  create({ stationId, name }: ICreateBikeDTO): Promise<void>;
  findByStationId(stationId: string): Promise<Bike[]>;
};

export { IBikeService };
