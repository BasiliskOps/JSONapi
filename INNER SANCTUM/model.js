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
    },
    Countries: [
        {
            Country: String,
            NewConfirmed: Number,
            TotalConfirmed: Number,
            NewDeaths: Number,
            TotalDeaths: Number,
            NewRecovered: Number,
            TotalRecovered: Number,
            Date: Date,
        } 
    ]

     


})

let Corona = mongoose.model('Corona', coronaSchema)

module.exports = Corona