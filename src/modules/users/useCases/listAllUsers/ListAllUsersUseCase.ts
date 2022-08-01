import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);
    
    if (!user) {
      throw new Error("Usuário não existe!");
    }

    if (user.admin === false) {
      throw new Error("Acesso negado, você não é um admin!");
    }

    const listUser = this.usersRepository.list();

    return listUser;
  }
}

export { ListAllUsersUseCase };
