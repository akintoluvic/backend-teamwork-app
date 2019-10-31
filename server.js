const http = require('http')
const app = require('./app')
var exports = module.exports = {};


const port = process.env.PORT || 3000;
app.set('port', port);

const server = http.createServer(app)

server.listen(port)

exports.closeServer = function(){
    server.close();
  };