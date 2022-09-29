require('dotenv').config()

const express = require('express')
const path = require('path')
const mustache = require('mustache-express')
const routes = require('./src/routes/routes')
const connection = require('./src/config/connection')

const server = express()

server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, './src/views'))
server.engine('mustache', mustache())

server.use(express.static(path.join(__dirname, 'public')))

server.use(routes)

server.use((req, res) => {
    res.status(404)
    res.send({message: 'url não encontrada'})
})

server.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`)
})

connection()