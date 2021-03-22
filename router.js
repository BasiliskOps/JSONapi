const { request } = require('express')
let express = require('express')

let coronaRouter = require('./INNER SANCTUM/router')

let router = new express.Router()

router.use('/coronas', coronaRouter)
router.get('/', (request, response)=> response.redirect('/coronas/'))
module.exports = router