const db = require("../data/db-config")

const addGuests = (potluck_id, user_id, potluck_food_id) => {
    return db("guests")
        .insert({ 
            potluck_id, 
            user_id, 
            potluck_food_id 
        })
}

module.exports = {
    addGuests
}