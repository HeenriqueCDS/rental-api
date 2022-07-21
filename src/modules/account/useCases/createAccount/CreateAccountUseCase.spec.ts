import { AppError } from "../../../../errors/AppError";
import { CustomerRepositoryInMemory } from "../../repositories/in-memory/CustomerRepositoryInMemory";
import { CreateAccountUseCase } from "./CreateAccountUseCase";

let customerRepositoryInMemory: CustomerRepositoryInMemory;

describe("Create Account", () => {
  beforeEach(() => {
    customerRepositoryInMemory = new CustomerRepositoryInMemory();
  });

  it("Should to be able a create a new account", async () => {
    const customer = await CreateAccountUseCase(customerRepositoryInMemory, {
      name: "John Doe",
      email: "johndoe@dropshipping.com.br",
      cellphone: "666999",
      password: "johndoe123",
    });

    expect(customer).toHaveProperty("id");
  });

  it("Should not to be able a create a new account with email already exits", async () => {
    expect(async () => {
      await CreateAccountUseCase(customerRepositoryInMemory, {
        name: "John Doe 1",
        email: "johndoe@dropshipping.com.br",
        cellphone: "666999",
        password: "johndoe123",
      });

      await CreateAccountUseCase(customerRepositoryInMemory, {
        name: "John Doe 2",
        email: "johndoe@dropshipping.com.br",
        cellphone: "666999",
        password: "johndoe123",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("Should not to be able a create a new account with cellphone already exits", async () => {
    expect(async () => {
      await CreateAccountUseCase(customerRepositoryInMemory, {
        name: "John Doe 1",
        email: "johndoe@dropshipping.com.br",
        cellphone: "666999",
        password: "johndoe123",
      });

      await CreateAccountUseCase(customerRepositoryInMemory, {
        name: "John Doe 2",
        email: "johndoe@dropshipping.com.br",
        cellphone: "666999",
        password: "johndoe123",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
