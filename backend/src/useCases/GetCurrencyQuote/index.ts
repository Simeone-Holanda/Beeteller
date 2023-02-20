import { GetCurrencyQuoteUserUseCase } from './GetCurrencyQuoteUseCase'
import { GetCurrencyQuoteController } from './GetCurrencyQuoteController'

const getCurrencyQuoteUserUseCase = new GetCurrencyQuoteUserUseCase()

const getCurrencyQuoteController = new GetCurrencyQuoteController(
    getCurrencyQuoteUserUseCase
)

export { getCurrencyQuoteController }
