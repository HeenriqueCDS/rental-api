import { User } from "../entities/user";
import { IBaseService } from "./base-service";

type IUserService = IBaseService<User> & {
  create(user: User): Promise<void>;
};

export { IUserService };
