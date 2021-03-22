require('./connection.js')
let mongoose = require("mongoose")
let coronaModel = require("./INNER SANCTUM/model")
let websiteData = require("./corona.json")
coronaModel.deleteMany({}).then(
  coronaModel.create(websiteData).then((coronas) => {
    console.log(coronas.length, "Corona data established")
    mongoose.disconnect()
  })
);