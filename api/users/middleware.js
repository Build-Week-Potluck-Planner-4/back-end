const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require("../tokenBuilder")

const checkToken = (req, res, next) => {
    const { authorization } = req.headers
    if (!authorization) {
        return next({ status: 401, message: "token required" })
    } 
    jwt.verify(
        authorization, 
        JWT_SECRET, 
        (err, decoded) => {
            if (err) {
                return next({ status: 401, message: "token invalid" })
            } 
            req.decodedJWT = decoded
            next()
        }
    )
    
}

const checkTokenId = (req, res, next) => {
    next()
}

const checkUsernameExists = (req, res, next) => {
    next()
}

const checkUsernameUnique = (req, res, next) => {
    next()
}

const checkUserPayload = (req, res, next) => {
    next()
}

module.exports = {
    checkToken,
    checkUsernameExists,
    checkUsernameUnique,
    checkUserPayload
}