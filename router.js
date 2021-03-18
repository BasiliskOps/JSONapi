let express = require('express')

let coronaRouter = require('./coronas/router')

let router = new express.Router()

router.use('/coronas', coronaRouter)

module.exports = router