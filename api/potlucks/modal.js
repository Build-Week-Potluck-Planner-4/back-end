const db = require("../data/db-config")

const getAll = () => {
    return db("potlucks")
}

module.exports = {
    getAll
}