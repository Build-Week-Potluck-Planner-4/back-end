const db = require("../data/db-config")

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
    addPotluck
}