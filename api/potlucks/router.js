const router = require("express").Router()
const { verifyPotluckPayload } = require("./middleware")

router.post("/:user_id", verifyPotluckPayload, (req, res, next) => {
    // to add potlucks
    res.end()
})

module.exports = router