const db = require("../data/db-config")

const getBy = filter => {
    return db("users")
        .where(filter)
}

module.exports = {
    getBy
}