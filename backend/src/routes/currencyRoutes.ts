import { Router } from 'express'
import { Request, Response } from 'express';
import { getCurrencyQuoteController } from '../useCases/GetCurrencyQuote/';
import { getCurrencyDataController } from '../useCases/GetCurrencyData/';
import { login } from '../middleware/login'

const userRouter = Router()


userRouter.get('/card', login, (request: Request, response: Response) => {
    return getCurrencyQuoteController.handle(request, response)
})

userRouter.get('/table/:symbol/:quantity', login, (request: Request, response: Response) => {
    return getCurrencyDataController.handle(request, response)
})

export default userRouter