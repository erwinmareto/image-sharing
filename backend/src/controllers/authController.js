const AuthService = require('../services/auth.js')

class AuthController{
    static register = async (req, res, next) => {
        try {
            const user = await AuthService.register(req.body)
            return res.status(201).json({message: "User registered", data: user})
        } catch (error) {
            next(error)
        }
    }

    static login = async (req, res, next) => {
        try {
            const user = await AuthService.login(req.body)
            return res.status(200).json({message: "Successfully logged in user", data: user})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = AuthController;