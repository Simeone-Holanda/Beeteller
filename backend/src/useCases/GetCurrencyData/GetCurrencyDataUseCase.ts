import AppError from "../../errors/Error";
import { IUsersRepository } from "../../repositories/Interfaces/IUserRepository";
import axios from 'axios'

export class GetCurrencyDataUserUseCase {
    private urlTable = 'https://economia.awesomeapi.com.br/json/daily'
    
    constructor() { }

    async getHistoricalCurrencyData(pier: string, quantity: number = 10) {
        return await axios.get(`${this.urlTable}/${pier}/${quantity}`)
    }

    async execute() {
        try {
            let currencyData = await this.getHistoricalCurrencyData('USD-BRL', 15)
            console.log(currencyData['data'])
            return currencyData['data']
        } catch (error) {
            console.log(error)
            throw new AppError(error.message)
        }

    }
}