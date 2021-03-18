let app = require('./app')
let server = app.listen(9000)


server.on('listening', ()=> console.log('Server is listening'))
server.on('error', ()=> console.error('Server is dead'))

module.exports = server