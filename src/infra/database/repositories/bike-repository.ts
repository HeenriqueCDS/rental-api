import { Bike } from "../../../domain/entities/bike";
import { IBikeRepository } from "../../../domain/repositories/bike-repository";

class BikeRepository implements IBikeRepository {
  private bikes: Bike[] = [];

  async findById(id: string): Promise<Bike> {
    const bike = this.bikes.find((bike) => bike.id === id);
    return bike;
  }
  async findAll(): Promise<Bike[]> {
    console.log(this.bikes);
    return this.bikes;
  }
  async save(entity: Bike): Promise<void> {
    this.bikes.push(entity);
  }
  async delete(id: string): Promise<void> {
    this.bikes = this.bikes.filter((bike) => bike.id !== id);
  }
  async findByStationId(stationId: string): Promise<Bike[]> {
    return this.bikes.filter((bike) => bike.stationId === stationId);
  }
}

export { BikeRepository };
