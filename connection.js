const mongoose = require('mongoose')

const mongooseConnectionConfig = { useNewUrlParser: true, useUnifiedTopology: true }


let connectionString = ""
if (process.env.NODE_ENV === 'production') {
    connectionString = process.env.DB_URL
} else {
    connectionString = 'mongodb://localhost/JSONAPI'
}
mongoose.connect(connectionString, mongooseConnectionConfig)
module.exports = mongoose