
const router = require("express").Router()
const { verifyPotluckPayload, checkPotluckExists } = require("./middleware")
const { getAll, addPotluck, remove } = require("./modal")

router.get("/", (req, res, next) => {
    getAll().then(potlucks => 
        res.status(200).json(potlucks)
    ).catch(next)
})

router.post("/", verifyPotluckPayload, (req, res, next) => {
    const { potluck, token } = req
    addPotluck({
        ...potluck, 
        user_id: token.subject 
    }).then(([potluck]) => 
        res.status(201).json(potluck)
    ).catch(next)
})

// stretch
// router.put("/:potluck_id", verifyPotluckPayload, checkPotluckExists, (req, res, next) => {
//     res.end()
// })

router.delete("/:potluck_id", checkPotluckExists, (req, res, next) => {
    const { potluck_id } = req.params
    remove(potluck_id).then(() => 
        res.status(200).json(req.potluck)
    ).catch(next)
})

module.exports = router