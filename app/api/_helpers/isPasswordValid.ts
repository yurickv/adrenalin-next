import { compare } from 'bcryptjs';

export async function isPasswordValid(
  password: string,
  hashedPassword: string
) {
  return await compare(password, hashedPassword);
}
