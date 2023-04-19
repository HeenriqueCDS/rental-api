import { AppError } from "../../errors/app-error";
import { ICreateStationDTO } from "../dtos/create-station-dto";
import { Station } from "../entities/station";
import { IStationRepository } from "../repositories/station-repository";

class StationService {
  private repository: IStationRepository;

  constructor(stationRepository: IStationRepository) {
    this.repository = stationRepository;
  }

  async findAll(): Promise<Station[]> {
    const stations = await this.repository.findAll();
    return stations;
  }

  async findById(id: string): Promise<Station> {
    const station = await this.repository.findById(id);
    return station;
  }
  async create({
    address,
    capacity,
    description,
    latitude,
    longitude,
    name,
  }: ICreateStationDTO): Promise<void> {
    const station = new Station({
      address,
      capacity,
      description,
      latitude,
      longitude,
      name,
    });
    await this.repository.save(station);
  }
  async update(id: string, entity: ICreateStationDTO): Promise<void> {
    const station = await this.repository.findById(id);
    if (!station) throw new AppError("Estação não encontrada");
    const updatedStation = Object.assign(station, entity);
    await this.repository.update(updatedStation);
  }
  async delete(id: string): Promise<void> {
    const station = await this.repository.findById(id);
    if (!station) throw new AppError("Estação não encontrada");

    await this.repository.delete(id);
  }
}

export { StationService };
