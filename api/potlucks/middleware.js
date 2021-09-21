const yup =  require('yup')
const { getById } = require("./modal")

const potluckSchema = yup.object().shape({
    potluck_name: yup
        .string()
        .trim()
        .required('Username is required!')
        .min(3, 'Potluck name must be 3 characters long!'),
    date: yup
        .string()
        .trim()
        .min(4, 'Give me a date!'),
    time: yup
        .string()
        .trim()
        .min(3, 'Start time must be 3 characters long!'),
    location: yup
        .string()
        .trim()
        .min(4, 'What is the Location!')
})

const verifyPotluckPayload = (req, res, next) => {
    potluckSchema.isValid(req.body)
        .then(() => {
            req.potluck = req.body
            next()
        }).catch(next)
}
const checkPotluckExists = (req, res, next) => {
    const { potluck_id } = req.params
    getById(potluck_id).then(potluck => {
        if (potluck) {
            req.potluck = potluck
            next()
        } else {
            next({ status: 404, message: "invalid id" })
        }
    }).catch(next)
}

module.exports = {
    verifyPotluckPayload,
    checkPotluckExists
}