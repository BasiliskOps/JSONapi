let express = require('express')
let router = require('./INNER SANCTUM/router')

let app = express()

app.use(express.json())
app.use(router)

module.exports = app