import 'dotenv/config'
import jwt from 'jsonwebtoken';
import Users from '../database/models/user'

interface IJwt {
    id: string
    fullName: string
    email: string
}


async function login(req: any, res: any, next: any) {
    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Unauthenticated!' });
        }
        const decode = jwt.verify(token, process.env.TOKEN_KEY) as IJwt
        const user = await Users.findByPk(decode.id)
        if (!user) {
            return res.status(401).json({ message: 'Invalid user!' });
        }
        req.user = decode
        req.token = token
        next()
    } catch (error) {
        console.log(error)
        return res.status(401).json({ message: 'Token inválido ou expirado!' });
    }
}

export {
    login
}