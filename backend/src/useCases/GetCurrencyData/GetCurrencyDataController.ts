import AppError from "../../errors/Error";
import { Request, Response } from 'express';
import { GetCurrencyDataUserUseCase } from "./GetCurrencyDataUseCase";


export class GetCurrencyDataController {
    constructor(private getCurrencyDataUserUseCase: GetCurrencyDataUserUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const data = await this.getCurrencyDataUserUseCase.execute()
            console.log('data')
            console.log(data)
            return response.status(200).send({ data })
        }
        catch (error) {
            if (error instanceof AppError) {
                return response.status(error.statusCode).json({ error: error.message });
            }
            console.log(error)
            return response.status(500).json({ error: error.message });
        }
    }
}