let app = require('./app')
let server = app.listen(9000)
app.set('port', process.env.PORT || 9000)
let port = app.get('port')
let server = app.listen(app.get('port'))


server.on('listening', ()=> console.log('Server is listening'))
server.on('error', ()=> console.error('Server is dead'))

module.exports = server