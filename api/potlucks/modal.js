const db = require("../data/db-config")

const potluckKeys = ["potluck_name", "date", "time", "location", "potluck_id", "user_id"]

const getAll = () => {
    return db("potlucks")
}
    
const getById = potluck_id => {
    return db("potlucks")
        .where({ potluck_id })
        .first()
}

const addPotluck = potluck => {
    return db("potlucks")
        .insert(potluck, potluckKeys)
}

const remove = id => {
    return getById(id).del()
}

const update = id => {
    return null
}

module.exports = {
    getById,
    addPotluck,
    getAll,
    remove
}
