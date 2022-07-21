import { AppError } from "../../../../errors/AppError";
import { HashPasswordProvider } from "../../../../providers/HashPasswordProvier";
import { ICreateAccountDTO } from "../../dtos/CreateAccount";
import { ICustomerRepository } from "../../repositories/ICustomerRepository";

export async function CreateAccountUseCase(
  customerRepository: ICustomerRepository,
  { email, cellphone, password, ...data }: ICreateAccountDTO
) {
  const customerWithEmailAlreadyExits = await customerRepository.findByEmail(
    email
  );

  if (customerWithEmailAlreadyExits) {
    throw new AppError(
      "account.invalid",
      "Account with same email already exists. Please try it another"
    );
  }

  const customerWithCellphoneAlreadyExits =
    await customerRepository.findByCellphone(cellphone);

  if (customerWithCellphoneAlreadyExits) {
    throw new AppError(
      "account.invalid",
      "Account with same cellphone already exists. Please try it another"
    );
  }

  const hashedPassword = await HashPasswordProvider(password, 10);

  const customer = await customerRepository.create({
    email,
    cellphone,
    password: hashedPassword,
    ...data,
  });

  return customer;
}
