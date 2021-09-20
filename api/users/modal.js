const db = require("../data/db-config")

const userDb = () => db("users") 

const getBy = filter => {
    return userDb
        .where(filter)
}

const getById = user_id => {
    return getBy({ user_id })
        .first()
}

const addUser = user => {
    return userDb
        .insert(user)
        .then(([id]) => getById(id))
} 

module.exports = {
    getBy,
    addUser
}