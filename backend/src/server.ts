import http from 'http'
import app from './app'

const port = process.env.PORT || 3000
const server = http.createServer(app)

console.log(`App starded in port ${port}!`)
server.listen(port)

