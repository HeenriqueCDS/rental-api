import { User } from "../entities/user";
import { IBaseRepository } from "./base-repository";

type IUserRepository = IBaseRepository<User>;

export { IUserRepository };
