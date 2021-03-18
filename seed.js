require('./connection.js')
let mongoose = require("mongoose");
let coronaModel = require("./coronas/model");
let websiteData = require("./data.json");
coronaModel.deleteMany({}).then(
  coronaModel.create(websiteData).then((coronas) => {
    console.log(coronas.length, "Corona data established");
    mongoose.disconnect();
  })
);