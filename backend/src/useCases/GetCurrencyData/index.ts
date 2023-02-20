import { GetCurrencyDataUserUseCase } from './GetCurrencyDataUseCase'
import { GetCurrencyDataController } from './GetCurrencyDataController'

const getCurrencyDataUserUseCase = new GetCurrencyDataUserUseCase()

const getCurrencyDataController = new GetCurrencyDataController(
    getCurrencyDataUserUseCase
)

export { getCurrencyDataController }
