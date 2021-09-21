const router = require("express").Router()
const { verifyPotluckPayload, checkPotluckExists } = require("./middleware")
const { getAll } = require("./modal")

router.get("/", (req, res, next) => {
    getAll().then(potlucks => 
        res.status(200).json(potlucks)
    ).catch(next)
})

router.post("/", verifyPotluckPayload, (req, res, next) => {
    // to add potlucks
    res.end()
})

router.put("/:potluck_id", verifyPotluckPayload, checkPotluckExists, (req, res, next) => {
    res.end()
})

router.delete("/:potluck_id", checkPotluckExists, (req, res, next) => {
    res.end()
})

module.exports = router