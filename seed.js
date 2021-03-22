require('./connection.js')
let mongoose = require("mongoose")
let coronaModel = require("./INNER SANCTUM/model")
let countryModel = require("./cmodel")
let websiteData = require("./corona.json")
coronaModel.deleteMany({}).then(
  coronaModel.create(websiteData).then((coronas) => {
    console.log(coronas.length, "Corona data established")
    mongoose.disconnect()
  })
);
countryModel.deleteMany({}).then(
  countryModel.create(websiteData).then((coronas) => {
    console.log(coronas.length, "Corona data established")
    mongoose.disconnect()
  })
);