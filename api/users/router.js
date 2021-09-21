const router = require("express").Router()
const User = require('./modal')
const bcrypt = require('bcrypt')
const { checkUsernameExists, checkUsernameUnique } = require("./middleware")

router.post("/register", checkUsernameUnique, async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const hash = bcrypt.hashSync(password, 8);
        const newUser = { username, password: hash };
        const user = await User.addUser(newUser);
        res.status(201).json(user);
    } catch (err) {
        next(err);
    }
})

router.post("/login", checkUsernameExists, (req, res, next) => {
    // login user
    res.end()
})

module.exports = router