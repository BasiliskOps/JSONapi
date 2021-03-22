let mongoose = require('mongoose')

let coronaSchema = new mongoose.Schema({
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

let Corona = mongoose.model('Corona', coronaSchema)

module.exports = Corona