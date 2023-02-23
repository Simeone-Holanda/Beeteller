import { Router } from 'express'
import { Request, Response } from 'express';
import { loginUserController } from '../useCases/LoginUser/';
import { createUserController } from '../useCases/CreateUser/';
const userRouter = Router()

userRouter.post('/login', (request: Request, response: Response) => {
    return loginUserController.handle(request, response)
})

userRouter.post('/register', (request: Request, response: Response) => {
    return createUserController.handle(request, response)
})

export default userRouter