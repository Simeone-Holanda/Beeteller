import AppError from "../../errors/Error";
import { IUsersRepository } from "../../repositories/Interfaces/IUserRepository";
import { ILoginUserDTO } from "./LoginUserDTO";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export class LoginUserUseCase {
    constructor(
        private userRepository: IUsersRepository
    ) { }

    async checkEncryptPassword(password: string, encryptPass: string) {
        return await bcrypt.compare(password, encryptPass)
    }

    async execute(data: ILoginUserDTO) {
        if (data) {
            let user = await this.userRepository.find({
                email: data.email
            })

            if (user) {
                let checkPassword = await this.checkEncryptPassword(data.password, user.password)
                if (checkPassword) {
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

            }
            throw new AppError('Email e/or password não existe. ')
        }
    }
}