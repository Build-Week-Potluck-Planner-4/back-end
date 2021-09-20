const db = require("../data/db-config")

const getById = potluck_id => {
    return db("potlucks")
        .where({ potluck_id })
        .first()
}

const addPotluck = potluck => {
    return db("potlucks")
        .insert(potluck)
        .then(([id]) => getById())
}

module.exports = {
    addPotluck
}