import AppError from "../../errors/Error";
import { Request, Response } from 'express';
import { CreateUserUseCase } from "./CreateUserUseCase";
import { ZodError } from "zod";


export class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { email, password, username } = request.body
            if (!(email && password && username)) {
                throw new AppError('Todos os campos são obrigatório. ')
            }
            await this.createUserUseCase.execute({ email, password, username })
            return response.status(201).send({ message: "Usuário cadastrado com sucesso. " })
        }
        catch (error) {
            if (error instanceof AppError) {
                return response.status(error.statusCode).json({ error: error.message });
            }
            if (error instanceof ZodError) {
                return response.status(400).json({
                    error: error.errors[0].message
                })
            }
            return response.status(500).json({ error: error.message });
        }
    }
}