require('dotenv').config()

const express = require('express')
const cors = require('cors')

const server = express()





server.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`)
})
