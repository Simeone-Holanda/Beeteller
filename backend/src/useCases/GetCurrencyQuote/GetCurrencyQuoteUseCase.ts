import AppError from "../../errors/Error";
import axios from 'axios'

export class GetCurrencyQuoteUserUseCase {
    private urlCards = 'https://economia.awesomeapi.com.br/last'
    constructor() { }

    async getCurrentQuote(symbols: string) {
        return await axios.get(`${this.urlCards}/${symbols}`)
    }

    async execute() {
        try {
            let currentQuote = await this.getCurrentQuote('USD-BRL,BTC-USD,BTC-EUR')
            console.log(currentQuote['data'])
            return currentQuote['data']
        } catch (error) {
            console.log(error)
            throw new AppError(error.message)
        }

    }
}