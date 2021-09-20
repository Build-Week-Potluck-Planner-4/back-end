const router = require("express").Router()
const { verifyPotluckPayload, checkPotluckExists } = require("./middleware")

router.post("/", verifyPotluckPayload, (req, res, next) => {
    // to add potlucks
    // be sure to add user_id from params
    res.end()
})

router.put("/:potluck_id", verifyPotluckPayload, checkPotluckExists, (req, res, next) => {
    res.end()
})

router.delete("/:potluck_id", checkPotluckExists, (req, res, next) => {
    res.end()
})

module.exports = router