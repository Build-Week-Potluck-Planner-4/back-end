const router = require("express").Router()

router.post("/register", (req, res, next) => {
    // add user
    res.end()
})

router.post("/login", (req, res, next) => {
    // login user
    res.end()
})

module.exports = router