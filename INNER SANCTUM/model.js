let mongoose = require('mongoose')

let globalSchema = new mongoose.Schema({
    Global: {
        NewConfirmed: String,
        TotalDeaths: Number,
        NewDeaths: Number,
        TotalDeaths: Number,
        NewRecovered: String,
        TotalRecovered: Number,
        Date: Date
    }

})

let countrySchema = new mongoose.Schema({
    Countries: {
        Name: String,
        NewConfirmed: Number,
        TotalConfirmed: Number,
        NewDeaths: Number,
        TotalDeaths: Number,
        NewRecovered: Number,
        TotalRecovered: Number,
        Date: Date

    }



})

let Global = mongoose.model('Global', globalSchema)
let Country = mongoose.model('Country', countrySchema)

module.exports = Global, Country