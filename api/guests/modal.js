const db = require("../data/db-config")

const addGuests = (potluck_id, user_id, potluck_food_id) => {
    return db("guests")
        .insert({ 
            potluck_id, 
            user_id, 
            potluck_food_id 
        })
}

const getById = guest_id => {
    return db("guests")
        .where({ guest_id })
        .first()
}

const guestGoing = (guest_id, going) => {
    return db("guests")
        .update({ accepted: going })
        .where({ guest_id })
}

module.exports = {
    addGuests,
    guestGoing,
    getById
}