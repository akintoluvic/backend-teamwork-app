const http = require('http')
const app = require('./app')
var exports = module.exports = {};


const port = process.env.PORT || 3000;
app.set('port', port);

const server = http.createServer(app)

if(!module.parent){ server.listen(port); }