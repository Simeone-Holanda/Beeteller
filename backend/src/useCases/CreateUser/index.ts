import { UsersRepository } from "../../repositories/Implementations/UserRepository";
import { CreateUserUseCase } from './CreateUserUseCase'
import { CreateUserController } from './CreateUserController'

const usersRepository = new UsersRepository()

const createUserUseCase = new CreateUserUseCase(
    usersRepository
)

const createUserController = new CreateUserController(
    createUserUseCase
)

export { createUserController }
