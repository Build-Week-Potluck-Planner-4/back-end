const db = require("../data/db-config")

const potluckKeys = ["potluck_name", "date", "time", "location", "potluck_id", "user_id"]

const getAll = () => {
    return db("potlucks")
}

const getPotluck = async potluck_id => {
    const res = await db("potluck_foods as pf")
        .leftJoin("foods as f", "f.food_id", "pf.food_id")
        .leftJoin("potlucks as p", "p.potluck_id", "pf.potluck_id")
        .select("p.*", "f.food_name")
        .where("p.potluck_id", potluck_id)

    const guests = await db("guests as g")
        .leftJoin("users as u", "u.user_id", "g.user_id")
        .leftJoin("potluck_foods as pf", "pf.potluck_food_id", "g.potluck_food_id")
        .leftJoin("foods as f", "f.food_id", "pf.food_id")
        .select("u.username", "f.food_name", "g.accepted", "g.guest_id")
        .where("pf.potluck_id", potluck_id)
    
    return {
        potluck_id: res[0].potluck_id,
        potluck_name: res[0].potluck_name,
        date: res[0].date,
        time: res[0].time,
        location: res[0].location,
        foods: res.map(p => p.food_name),
        guests: guests.map(g => ({ 
            ...g, 
            accepted: g.accepted ? true : false 
        }))
    }
}

// for getting foods with potlucks
// select p.*, f.food_name from potluck_foods as pf
// left join foods as f
// on f.food_id = pf.food_id
// left join potlucks as p
// on p.potluck_id = pf.potluck_id

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
    getPotluck,
    remove
}
