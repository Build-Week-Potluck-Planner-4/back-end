const db = require("../data/db-config")

const userDb = db("users")

const getBy = filter => {
    return userDb
        .where(filter)
}

const getById = user_id => {
    return getBy({ user_id })
        .first()
}

const addUser =async user => {
    const [user_id] = await db('users').insert(user, 'user_id');
    return getById(user_id);
} 

module.exports = {
    getBy,
    addUser
}