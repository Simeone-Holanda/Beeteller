import AppError from "../../errors/Error";
import { IUsersRepository } from "../../repositories/Interfaces/IUserRepository";
import { CreateUserDTO, createUserSchema } from "./CreateUserDTO";
import bcrypt from 'bcrypt'

export class CreateUserUseCase {
    constructor(
        private userRepository: IUsersRepository
    ) { }

    async encryptPassword(password: string) {
        return await bcrypt.hash(password, 10);
    }

    async execute(data: CreateUserDTO) {
        const validatedData = createUserSchema.parse(data)

        let user = await this.userRepository.find({
            email: validatedData.email,
            username: validatedData.username
        })
        
        if (user) {
            throw new AppError("Este usuário já está cadastrado em nosso sistema. ", 409)
        } else {
            let encryptPass = await this.encryptPassword(validatedData.password)
            await this.userRepository.save({
                username: validatedData.username,
                email: validatedData.email,
                password: encryptPass
            })
            return
        }
    }
}