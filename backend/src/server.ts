import http from 'http'
import app from './app'
import sequelize from './database'
import 'dotenv/config'


sequelize.sync()
    .then(() => {
        const server = http.createServer(app)
        const port = process.env.PORT || 3000
        console.log(`App starded in port ${port}!`)
        server.listen(port)
    })
    .catch(err => {
        console.error('Unable to synchronize models:', err);
    });


