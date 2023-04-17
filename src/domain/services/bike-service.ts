import { ICreateBikeDTO } from "../dtos/create-bike-dto";
import { Bike } from "../entities/bike";
import { IBikeRepository } from "../repositories/bike-repository";

class BikeService {
  repository: IBikeRepository;

  constructor(respository: IBikeRepository) {
    this.repository = respository;
  }

  async findAll(): Promise<Bike[]> {
    return this.repository.findAll();
  }
  async findById(id: string): Promise<Bike> {
    const bike = this.repository.findById(id);

    if (!bike) throw new Error("Bicicleta não encontrada");

    return bike;
  }
  async create({ stationId, name }: ICreateBikeDTO): Promise<void> {
    const bike = new Bike({ stationId, name });
    this.repository.save(bike);
  }
  async update(entity: Bike): Promise<void> {
    this.repository.save(entity);
  }
  async delete(id: string): Promise<void> {
    this.repository.delete(id);
  }
  async findByStationId(stationId: string): Promise<Bike[]> {
    return this.repository.findByStationId(stationId);
  }
}

export { BikeService };
