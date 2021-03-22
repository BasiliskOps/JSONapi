let express = require('express')

let coronaRouter = require('./INNER SANCTUM/router')

let router = new express.Router()

router.use('/coronas', coronaRouter)
router.get('/countries/', (request, response) =>console.log('Hit it!')) 
module.exports = router