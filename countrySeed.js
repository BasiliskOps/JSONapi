require('./connection.js')
let mongoose = require("mongoose")
let Country = require("./INNER SANCTUM/model")
console.log(Country)
let websiteData = require("./corona.json")
Country.deleteMany({}).then(
  Country.create(websiteData.Country).then((coronas) => {
    console.log(coronas.length, "Corona data established")
    mongoose.disconnect()
  })
)