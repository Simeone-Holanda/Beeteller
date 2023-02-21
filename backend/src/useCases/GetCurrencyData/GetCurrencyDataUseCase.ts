import AppError from "../../errors/Error";
import { IUsersRepository } from "../../repositories/Interfaces/IUserRepository";
import axios from 'axios'

export class GetCurrencyDataUserUseCase {
    private urlTable = 'https://economia.awesomeapi.com.br/json/daily'

    constructor() { }

    async getHistoricalCurrencyData(pier: string, quantity: number) {
        return await axios.get(`${this.urlTable}/${pier}/${quantity}`)
    }

    async execute(symbol: string, quantity: number = 15) {
        try {
            let currencyData = await this.getHistoricalCurrencyData(symbol, quantity)
            console.log(currencyData['data'])
            return currencyData['data']
        } catch (error) {
            console.log(error)
            throw new AppError(error.message)
        }

    }
}