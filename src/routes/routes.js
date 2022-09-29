const express = require('express')
const router = express.Router()

const Login = require('../controllers/Login')

router.get('/', Login.login)

module.exports = router