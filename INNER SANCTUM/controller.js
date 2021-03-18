let Corona = require('./model')
require('../connection')



let controller = {
    create(request, response){
        let corona = request.body
        Corona
            .create(corona)
            .then(corona=> response.json(corona))
    },
    readById(request, response){
        let id = request.params.id
        Corona
            .find({})
            .then(coronas=> response.json(coronas))
    },
    readAll(request, response){
        Corona
            .find({})
            .then(coronas=> response.json(coronas))
    },
    update(request, response) {
        let corona = requestbody
        let id = request.params.id
        Corona  
            .findByIdAndUpdate(id, bookmark, {new: true})
            .then(corona=> response.json(corona))
    },
    destroy(request, response) {
        let id = request.params.id
        Corona
            .findByIdAndDelete(id)
            .then(()=> response.json({ok: true}))
    }
}

module.exports = controller