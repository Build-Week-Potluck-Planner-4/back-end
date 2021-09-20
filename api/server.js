const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const { checkUserPayload } = require("./users/middleware")
const userEndpoints = require("./users/router")
const potlucksEndpoints = require("./potlucks/router")

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use("/api/users", checkUserPayload, userEndpoints)
server.use("/api/potlucks", potlucksEndpoints)


module.exports = server
