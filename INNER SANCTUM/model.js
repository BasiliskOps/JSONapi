let mongoose = require('mongoose')

let coronaSchema = new mongoose.Schema({
    Global: String, 
    NewConfimed: Number,
    NewDeaths: Number,
    TotalDeaths: Number,
    NewRecovered: Number,
    TotalRecovered: Number,
    Country: String,
    Deaths: Number,
    Recovered: Number


})

let Corona = mongoose.model('Corona', coronaSchema)

module.exports = Corona