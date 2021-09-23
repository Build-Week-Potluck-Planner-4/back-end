const router = require("express").Router()
const { getAll } = require("./modal")

router.get("/:search", (req, res, next) => {
    const { search } = req.params
    getAll().then(foods => {
        const searchedFor = foods.filter(f => 
            f.toLowerCase().includes(search.toLowerCase())
        )
        if (searchedFor.length > 10) {
            res.status(200).json(searchedFor.splice(0, 9))
        } else {
            res.status(200).json(searchedFor)
        }
    }).catch(next)
})

module.exports = router