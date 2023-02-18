import { UsersRepository } from "../../repositories/Implementations/UserRepository";
import { LoginUserUseCase } from './LoginUserUseCase'
import { LoginUserController } from './LoginUserController'

const usersRepository = new UsersRepository()

const loginUserUseCase = new LoginUserUseCase(
    usersRepository
)

const loginUserController = new LoginUserController(
    loginUserUseCase
)

export { loginUserController }
