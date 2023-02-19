import AppError from "../../errors/Error";
import { Request, Response } from 'express';
import { LoginUserUseCase } from "./LoginUserUseCase";


export class LoginUserController {
    constructor(private loginUser: LoginUserUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { email, password } = request.body
            if (!(email && password)) {
                throw new AppError('All input is required. ')
            }
            const data = await this.loginUser.execute({ email, password })
            return response.status(200).send({ token: data })
        }
        catch (error) {
            if (error instanceof AppError) {
                return response.status(error.statusCode).json({ error: error.message });
            }
            return response.status(500).json({ error: error.message });
        }
    }
}