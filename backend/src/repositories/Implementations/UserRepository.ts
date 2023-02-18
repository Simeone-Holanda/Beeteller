import { IUsersRepository, ILoginUserDTO } from "../Interfaces/IUserRepository";
import User from "../../database/models/user";
import { UniqueConstraintError, WhereOptions } from "sequelize";
import AppError from "../../errors/Error";

export class UsersRepository implements IUsersRepository {

    async find(fields: WhereOptions<User>): Promise<User> {
        try {
            const user = await User.findOne({ where: fields })
            if (user) {
                return user
            }
            return user
        } catch (error) {
            throw new AppError(error.message, 400)
        }
    }

    async save(user: Users): Promise<Users> {
        try {
            return await Users.create(user)
        } catch (error) {
            if (error instanceof UniqueConstraintError) {
                throw new AppError(`${Object.keys(error.fields)} alredy existe.`)
            }
            throw new AppError(error.message, 409)

        }
    }
}