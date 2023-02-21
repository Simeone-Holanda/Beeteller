import { Router } from 'express'
import { Request, Response } from 'express';
import { getCurrencyQuoteController } from '../useCases/GetCurrencyQuote/';
import { getCurrencyDataController } from '../useCases/GetCurrencyData/';

const userRouter = Router()


userRouter.get('/card', (request: Request, response: Response) => {
    return getCurrencyQuoteController.handle(request, response)
})

userRouter.get('/table/:symbol/:quantity', (request: Request, response: Response) => {
    return getCurrencyDataController.handle(request, response)
})

export default userRouter