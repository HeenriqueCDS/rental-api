import { ICreateStationDTO } from "../dtos/create-station-dto";
import { Station } from "../entities/station";
import { IStationRepository } from "../repositories/station-repository";

class StationService {
  private repository: IStationRepository;

  constructor(stationRepository: IStationRepository) {
    this.repository = stationRepository;
  }

  async findAll(): Promise<Station[]> {
    return this.repository.findAll();
  }

  async findById(id: string): Promise<Station> {
    const station = this.repository.findById(id);

    if (!station) throw new Error("Bicicleta não encontrada");

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
  async update(entity: Station): Promise<void> {
    this.repository.save(entity);
  }
  async delete(id: string): Promise<void> {
    this.repository.delete(id);
  }
}

export { StationService };
