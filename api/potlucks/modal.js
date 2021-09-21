const db = require("../data/db-config")

const getAll = () => {
    return db("potlucks as p")
}
// for getting foods with potlucks
// select p.*, f.food_name from potluck_foods as pf
// left join foods as f
// on f.food_id = pf.food_id
// left join potlucks as p
// on p.potluck_id = pf.potluck_id

const getById = potluck_id => {
    return db("potlucks")
        .where({ potluck_id })
        .first()
}

const addPotluck = potluck => {
    return db("potlucks")
        .insert(([id]) => getById(id))
}

const remove = id => {
    return null
}

const update = id => {
    return null
}

module.exports = {
    getById,
    addPotluck,
    getAll
}
