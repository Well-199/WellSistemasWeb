const User = require('../models/User')
const bcrypt = require('bcrypt')

let hashToken = null

const AuthController = {

    async signin (req, res, next) {

        let email = req.body.email
        let senha = req.body.password

        let errorMessage = 'E-mail /ou senha inválido'

        if(!email){
            res.render('home', {errorMessage})
            return
        }

        if(!senha){
            res.render('home', {errorMessage})
            return
        }

        // ao buscar o usuario eu istancio o Model Usuario em user
        const user = await User.findOne({email: email})

        if(!user){
            res.render('home', {errorMessage})
            return
        }

        // validando a senha
        const match = await bcrypt.compare(senha, user.password)

        if(!match){
            res.render('home', {errorMessage})
            return
        }

        // Gera um token aleatório necessario para criar uma sessão 
        const payload = (Date.now() + Math.random()).toString()
        const token = await bcrypt.hash(payload, 10)

        user.token = token
        await user.save()

        hashToken = token
        next()
    },

    async painel (req, res) {

        res.render('painel', {hashToken})
    }
}

module.exports = AuthController