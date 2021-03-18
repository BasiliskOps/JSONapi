const mongoose = require('mongoose')

const mongooseConnectionConfig = { useNewUrlParser: true, useUnifiedTopology: true }

// mongoose.connect('mongodb://localhost/corona', mongooseConnectionConfig)

// mongoose.connection.on('connected', ()=> console.log('Connected to database'))
// mongoose.connection.on('disconnected', ()=> console.log('Disconnected from database'))
// mongoose.connection.on('error', error=> console.error('Database error', error))

let connectionString = ""
if (process.env.NODE_ENV === 'production') {
    connectionString = process.env.DB_URL
} else {
    connectionString = 'mongodb://localhost/JSONAPI'
}
mongoose.connect(connectionString, mongooseConnectionConfig)
module.exports = mongoose