//src/index.js
const express = require("express")
const morgan = require("morgan")
const server = express()
const mainRoute = require("./routes/mainRoute.js")

//primero morgan
server.use(morgan('tiny'));


//luego las rutas
server.use(mainRoute);





module.exports = server;