const router = require("express").Router()
const { verifyPotluckPayload, checkPotluckExists } = require("./middleware")
const { addPotluck } = require("./modal")

router.post("/", verifyPotluckPayload, (req, res, next) => {
    const { body, token } = req
    addPotluck({
        ...body, 
        user_id: token.subject 
    }).then(potluck => {
        res.status(201).json(potluck)
    }).catch(next)
})

router.put("/:potluck_id", verifyPotluckPayload, checkPotluckExists, (req, res, next) => {
    res.end()
})

router.delete("/:potluck_id", checkPotluckExists, (req, res, next) => {
    res.end()
})

module.exports = router