import { ICreateAccountDTO } from "../dtos/CreateAccount";
import { Customer } from "../infra/entities/Customer";

interface ICustomerRepository {
  create(data: ICreateAccountDTO): Promise<Customer>;
  findByEmail(email: string): Promise<Customer | undefined>;
  findByCellphone(cellphone: string): Promise<Customer | undefined>;
}

export { ICustomerRepository };
