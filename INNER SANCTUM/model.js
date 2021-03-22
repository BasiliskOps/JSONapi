let mongoose = require('mongoose')

let countrySchema = new mongoose.Schema({
    name: String,
    totalDeaths: Number,
    totalRecovered: Number
})

let Country = mongoose.model('Country',  countrySchema)

module.exports = Country