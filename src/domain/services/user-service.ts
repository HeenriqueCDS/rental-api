import { AppError } from "../../errors/app-error";
import { ICreateUserDTO } from "../dtos/create-user-dto";
import { User } from "../entities/user";
import { IUserRepository } from "../repositories/user-repository";

class UserService {
  private repository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.repository = userRepository;
  }

  async findAll(): Promise<User[]> {
    const users = await this.repository.findAll();
    return users;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findById(id);
    return user;
  }
  async create({ email, name, password }: ICreateUserDTO): Promise<void> {
    const user = new User({
      name,
      email,
      password,
    });
    await this.repository.save(user);
  }
  async update(id: string, entity: ICreateUserDTO): Promise<void> {
    const user = await this.repository.findById(id);
    if (!user) throw new AppError("Usuário não encontrado");
    const updatedUser = Object.assign(user, entity);
    await this.repository.update(updatedUser);
  }
  async delete(id: string): Promise<void> {
    const user = await this.repository.findById(id);
    if (!user) throw new AppError("Usuário não encontrado");

    await this.repository.delete(id);
  }
}

export { UserService };
