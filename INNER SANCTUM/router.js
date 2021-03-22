let express = require('express')
let router = new express.Router()

let controller = require('./controller')

router.get('/', controller.readAll)
router.get('/:id', controller.readById)
router.post('/', controller.create)
router.delete('/:new', controller.delete)

module.exports = router