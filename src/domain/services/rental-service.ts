import { AppError } from "../../errors/app-error";
import { ICreateRentalDTO } from "../dtos/create-rental-dto";
import { Rental } from "../entities/rental";
import { IBikeRepository } from "../repositories/bike-repository";
import { IRentalRepository } from "../repositories/rental-repository";
import { IUserRepository } from "../repositories/user-repository";

class RentalService {
  private repository: IRentalRepository;
  private bikesRepository: IBikeRepository;
  private usersRepository: IUserRepository;

  constructor(
    rentalRepository: IRentalRepository,
    userRepository: IUserRepository,
    bikeRepository: IBikeRepository
  ) {
    this.repository = rentalRepository;
    this.bikesRepository = bikeRepository;
    this.usersRepository = userRepository;
  }

  async findAll(): Promise<Rental[]> {
    const rentals = await this.repository.findAll();
    return rentals;
  }

  async findById(id: string): Promise<Rental> {
    const rental = await this.repository.findById(id);
    return rental;
  }
  async create({
    bikeId,
    previewedEnd,
    userId,
  }: ICreateRentalDTO): Promise<void> {
    const bike = await this.bikesRepository.findById(bikeId);
    if (!bike)
      throw new AppError("Não é possível alugar uma bicicleta inexistente");
    const user = await this.usersRepository.findById(userId);
    if (!user)
      throw new AppError(
        "Aluguel não pode ser feito para um usuário inexistente"
      );
    const rental = new Rental({
      bikeId,
      previewedEnd,
      userId,
    });
    await this.repository.save(rental);
  }
  async update(id: string, entity: ICreateRentalDTO): Promise<void> {
    const rental = await this.repository.findById(id);
    if (!rental) throw new AppError("Aluguel não encontrado");
    const updatedRental = Object.assign(rental, entity);
    await this.repository.update(updatedRental);
  }
  async delete(id: string): Promise<void> {
    const rental = await this.repository.findById(id);
    if (!rental) throw new AppError("Alguel não encontrado");

    await this.repository.delete(id);
  }
}

export { RentalService };
