let express = require('express')

let coronaRouter = require('./INNER SANCTUM/router')

let router = new express.Router()

router.use('/coronas', coronaRouter)

module.exports = router