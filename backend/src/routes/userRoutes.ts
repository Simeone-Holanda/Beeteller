import { Router } from 'express'
import { Request, Response } from 'express';
import { loginUserController } from '../useCases/LoginUser/';
const userRouter = Router()

userRouter.post('/login', (request: Request, response: Response) => {
    return loginUserController.handle(request, response)
})

export default userRouter