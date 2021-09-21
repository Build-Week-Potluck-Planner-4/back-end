const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const { checkUserPayload, checkToken } = require("./users/middleware")
const restricted = require('./restricted')

const userEndpoints = require("./users/router")
const potlucksEndpoints = require("./potlucks/router")

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())
// checkUserPayload,
server.use("/api/users",  userEndpoints)
server.use("/api/potlucks", checkToken, potlucksEndpoints)

server.use((err, req, res, next) => {
    const { status, message, stack } = err
    res.status(status || 500).json({
        message,
        stack
    })
})

module.exports = server
