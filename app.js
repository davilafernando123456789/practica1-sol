const express = require ('express')
const app = express()

const http = require('http')
const server = http.createServer(app)

const {Server} = require('socket.io')
const io = new Server(server)


app.get('/', (req, resp) => {
    resp.sendFile(`${__dirname}/cliente/index.html`)
})
app.get('/clientes', (req, resp) => {
  resp.sendFile(`${__dirname}/cliente/clientes.html`)
})
app.get('/productos', (req, resp) => {
  resp.sendFile(`${__dirname}/cliente/productos.html`)
})

server.listen(3000,() => {
    console.log('Servidor corriendo en http://localhost:3000')
})