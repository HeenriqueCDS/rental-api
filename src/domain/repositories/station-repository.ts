import { Station } from "../entities/station";
import { IBaseRepository } from "./base-repository";

type IStationRepository = IBaseRepository<Station>;

export { IStationRepository };
