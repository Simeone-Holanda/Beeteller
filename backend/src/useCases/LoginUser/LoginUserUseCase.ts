import AppError from "../../errors/Error";
import { IUsersRepository } from "../../repositories/Interfaces/IUserRepository";
import { ILoginUserDTO } from "./LoginUserDTO";
import jwt from 'jsonwebtoken'

export class LoginUserUseCase {
    constructor(
        private userRepository: IUsersRepository
    ) { }

    async execute(data: ILoginUserDTO) {
        if (data) {
            let user = await this.userRepository.find({
                email: data.email
            })
            // TODO: Fazer verificações de senha
            // TODO: Fazer verificações de email valido
            if (user) {
                const token = jwt.sign({
                    id: user.id,
                    username: user.username,
                    email: user.email
                },
                    process.env.TOKEN_KEY,
                    {
                        expiresIn: "1h",
                    }
                );
                return token
            }
            throw new AppError('Email e/or password not exist. ')
        }
    }
}