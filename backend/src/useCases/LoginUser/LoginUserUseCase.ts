import AppError from "../../errors/Error";
import { IUsersRepository } from "../../repositories/Interfaces/IUserRepository";
import { ILoginUserDTO } from "./LoginUserDTO";

export class LoginUserUseCase {
    constructor(
        private userRepository: IUsersRepository
    ) { }

    async execute(data: ILoginUserDTO) {
        if (data) {
            let user = await this.userRepository.find({
                email: data.email,
                password: data.password
            })
            if (user) {
                return user
            }
            throw new AppError('Email e/or password not exist. ')
        }
    }
}