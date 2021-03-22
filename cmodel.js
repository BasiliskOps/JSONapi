let mongoose = require('mongoose')

let countrySchema = new mongoose.Schema({
    
        
            Country: String,
            NewConfirmed: Number,
            TotalConfirmed: Number,
            NewDeaths: Number,
            TotalDeaths: Number,
            NewRecovered: Number,
            TotalRecovered: Number,
            Date: Date
        
})



let Country = mongoose.model('Country', countrySchema)

module.exports = Country