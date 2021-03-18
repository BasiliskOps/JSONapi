const mongoose = require('mongoose')

const mongooseConnectionConfig = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose.connect('mongodb://localhost/corona', mongooseConnectionConfig)

mongoose.connection.on('connected', ()=> console.log('Connected to database'))
mongoose.connection.on('disconnected', ()=> console.log('Disconnected from database'))
mongoose.connection.on('error', error=> console.error('Database error', error))

module.exports = mongoose