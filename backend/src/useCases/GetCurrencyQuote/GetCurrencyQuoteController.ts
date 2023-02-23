import AppError from "../../errors/Error";
import { Request, Response } from 'express';
import { GetCurrencyQuoteUserUseCase } from "./GetCurrencyQuoteUseCase";


export class GetCurrencyQuoteController {
    constructor(private getCurrencyDataUserUseCase: GetCurrencyQuoteUserUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const data = await this.getCurrencyDataUserUseCase.execute()
            return response.status(200).send({ data })
        }
        catch (error) {
            if (error instanceof AppError) {
                return response.status(error.statusCode).json({ error: error.message });
            }
            return response.status(500).json({ error: error.message });
        }
    }
}