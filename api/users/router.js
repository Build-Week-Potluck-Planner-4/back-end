const router = require("express").Router()
const { checkUsernameExists, checkUsernameUnique } = require("./middleware")

router.post("/register", checkUsernameUnique, (req, res, next) => {
    // add user
    res.end()
})

router.post("/login", checkUsernameExists, (req, res, next) => {
    // login user
    res.end()
})

module.exports = router