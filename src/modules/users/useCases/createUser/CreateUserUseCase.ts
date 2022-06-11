/* eslint-disable prettier/prettier */
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ email, name }: IRequest): User {
    // Complete aqui
    const user = this.usersRepository.findByEmail(email);
    if (user) {
      throw new Error("User already registered!")
    }
    const newUser = this.usersRepository.create({ name, email });
    if (!newUser) {
      throw new Error("Salve user failed!")
    }
    return newUser;

  }
}

export { CreateUserUseCase };
