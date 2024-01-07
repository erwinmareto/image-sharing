const {verifyToken} = require('../lib/jwt.js')
const UserService = require('../services/users.js')

const authenticate = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            throw {name: 'Unauthenticated'}
        }
        const accessToken = req.headers.authorization.split(" ")[1]
        const {id} = verifyToken(accessToken)
        const user = await UserService.getUserById(id)
        if (!user) {
            throw {name: "Unauthenticated"}
        }
        req.user = user
        next()
    } catch (error) {
        next(error)
    }
}

const authorize = async (req, res, next) => {
    try {
        const {username} = req.user
        if (username !== 'admin') {
            throw {name: 'Unauthorized'}
        }
        next()
    } catch (error) {
        next(error)

    }
}

module.exports = {authenticate, authorize}