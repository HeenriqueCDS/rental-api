import { ICreateAccountDTO } from "../../dtos/CreateAccount";
import { Customer } from "../../infra/entities/Customer";
import { ICustomerRepository } from "../ICustomerRepository";

export class CustomerRepositoryInMemory implements ICustomerRepository {
  customers: Customer[] = [];

  async create(data: ICreateAccountDTO): Promise<Customer> {
    const customer = new Customer();

    Object.assign(customer, data);

    this.customers.push(customer);

    return customer;
  }

  async findByEmail(email: string): Promise<Customer | undefined> {
    const customer = this.customers.find(
      (customer) => customer.email === email
    );

    return customer;
  }

  async findByCellphone(cellphone: string): Promise<Customer | undefined> {
    const customer = this.customers.find(
      (customer) => customer.email === cellphone
    );

    return customer;
  }
}
