require('./connection.js')
let mongoose = require("mongoose")
let coronaModel = require("./INNER SANCTUM/model")
let countryModel = require("./cmodel")
let websiteData = require("./corona.json")
coronaModel.deleteMany({}).then(
  coronaModel.create(websiteData).then((coronas) => {
    console.log(coronas.length, "Corona data established")
    
  })
)
countryModel.deleteMany({}).then( ()=> {
  const allCountries = websiteData[0].Countries
  console.log(allCountries.length)
  countryModel.create(allCountries).then((coronas) => {
    console.log(coronas.length, "Country data established")
    mongoose.disconnect()
  })
}
  
);