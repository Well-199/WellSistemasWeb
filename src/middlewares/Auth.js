const User = require('../models/User')

const Auth = {

    async private (req, res, next) {

        // Se não veio no header nem no body nao existe token
        if(!req.headers.authorization){
            res.render('home')
            return
        }

        let token = req.headers.authorization

        // se o token que eu peguei ta vazio eu paro a requisição aqui
        if(token == ''){
            res.render('home')
            return
        }

        // verefica se existe usuario logado com pelo token
        const user = await User.findOne(token)

        // se não foi encontrado um token no banco paro a requisiçao aqui
        if(!user){
            res.render('home')
            return
        }

        // se foi encontrado um token valido no banco a rota prossegue
        next()
    }

}

module.exports = Auth