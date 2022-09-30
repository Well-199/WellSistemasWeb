const express = require('express')
const router = express.Router()

const Auth = require('../middlewares/Auth')

const AuthController = require('../controllers/AuthController')

router.get('/', (req, res) => {
    res.render('home')
})

router.post('/', AuthController.signin, AuthController.painel)




module.exports = router