import { AppError } from "../../errors/app-error";
import { ICreateBikeDTO } from "../dtos/create-bike-dto";
import { Bike } from "../entities/bike";
import { IBikeRepository } from "../repositories/bike-repository";
import { IStationRepository } from "../repositories/station-repository";

// Lógica de negócio
class BikeService {
  private repository: IBikeRepository;
  private stationRepository: IStationRepository;

  constructor(
    respository: IBikeRepository,
    stationRepository: IStationRepository
  ) {
    this.repository = respository;
    this.stationRepository = stationRepository;
  }

  async findAll(): Promise<Bike[]> {
    const bikes = await this.repository.findAll();
    return bikes;
  }

  async findById(id: string): Promise<Bike> {
    const bike = await this.repository.findById(id);
    if (!bike) throw new AppError("Bicicleta não encontrada");
    return bike;
  }

  async create({ stationId, name }: ICreateBikeDTO): Promise<void> {
    const stationAlreadyExists = await this.stationRepository.findById(
      stationId
    );
    if (!stationAlreadyExists)
      throw new AppError("Estação não encontrada", 404);
    const bike = new Bike({ stationId, name });
    this.repository.save(bike);
  }

  async update(id: string, entity: ICreateBikeDTO): Promise<void> {
    const bike = await this.repository.findById(id);
    if (!bike) throw new AppError("Bicicleta não encontrada", 404);
    if (entity.stationId) {
      const stationExists = await this.stationRepository.findById(
        entity.stationId
      );
      if (!stationExists) throw new AppError("Estação não encontrada", 404);
    }
    const updatedBike = Object.assign(bike, entity);
    await this.repository.update(updatedBike);
  }

  async delete(id: string): Promise<void> {
    const bike = await this.repository.findById(id);
    if (!bike) throw new AppError("Bicicleta não encontrada", 404);

    await this.repository.delete(id);
  }

  async findByStationId(stationId: string): Promise<Bike[]> {
    const bikes = await this.repository.findByStationId(stationId);
    return bikes;
  }
}

export { BikeService };
