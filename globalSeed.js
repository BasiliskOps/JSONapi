require('./connection.js')
let mongoose = require("mongoose")
let Global = require("./INNER SANCTUM/model")

let websiteData = require("./corona.json")
Global.deleteMany({}).then(
  Global.create(websiteData).then((coronas) => {
    console.log(coronas.length, "Corona data established")
    mongoose.disconnect()
  })
)