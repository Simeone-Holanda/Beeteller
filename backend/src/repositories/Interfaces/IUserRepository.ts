import { WhereOptions } from "sequelize"
import User from "../../database/models/user"

export interface IUserDTO {
    username: string
    email: string
    password: string
}

export interface IUsersRepository {
    find(fields: WhereOptions<User>): Promise<User>
    // findAll(fields: TypeUser, include?: object, attributes?: string[]): Promise<Users[]>
    save(user: IUserDTO): Promise<User>
}