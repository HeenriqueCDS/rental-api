import { hash } from "bcryptjs";

export async function HashPasswordProvider(
  password: string,
  salt: string | number = 10
) {
  return hash(password, salt);
}
