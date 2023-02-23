import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import userRouter from './routes/userRoutes'
import currencyRoutes from './routes/currencyRoutes'
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json';


const app = express();

// Log das requisições a api
app.use(morgan('dev'))

app.use(express.urlencoded({ extended: false }))
app.use(express.json()) // config para aceitar apenas json como entrada 


// Config cors
app.use((req, res, next) => {
    res.header('access-control-allow-origin', process.env.CORS_ORIGIN);
    res.header('access-control-allow-headers', "*");

    if (req.method === 'OPTIONS') {
        res.header('access-control-allow-methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }
    next();
});


// proteção contra 11 ataques basicos de hackers 
app.use(helmet())

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))


app.use('/account', userRouter)
app.use('/currency-data', currencyRoutes)

app.use('/', (req, res, next) => {
    return res.status(200).json({
        status: '200',
        message: 'OK!'
    })
})

// Rota não encontrada!
app.use((req, res, next) => {
    const erro: any = new Error('Não encontrado.')
    erro.status = 404
    next(erro)
})

// Captura todo tipo de erro ligado a rota
app.use((error, req, res, next) => {
    res.status(error.status || 500)
    console.log(error)
    return res.send({
        erro: {
            message: error.message
        }
    })
})

export default app