import AppError from "../../errors/Error";
import axios from 'axios'

export class GetCurrencyDataUserUseCase {
    private urlTable = 'https://economia.awesomeapi.com.br/json/daily'

    constructor() { }

    async getHistoricalCurrencyData(pier: string, quantity: number) {
        return await axios.get(`${this.urlTable}/${pier}/${quantity}`)
    }

    async execute(symbol: string, quantity: number) {
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