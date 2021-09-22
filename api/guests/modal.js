const db = require("../data/db-config")

const addGuest = (potluck_id, user_id) => {
    return db("guests")
        .insert({ 
            potluck_id, 
            user_id, 
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
    addGuest,
    guestGoing,
    getById
}