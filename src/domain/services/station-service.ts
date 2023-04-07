import { Station } from "../entities/station";
import { IBaseService } from "./base-service";

type IStationService = IBaseService<Station> & {
  create(station: Station): Promise<void>;
};

export { IStationService };
