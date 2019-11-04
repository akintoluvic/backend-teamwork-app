const http = require('http')
const app = require('./app')
const dotenv = require('dotenv');
dotenv.config();
var exports = module.exports = {};



const port = process.env.PORT;
app.set('port', port);

const server = http.createServer(app)

if(!module.parent){ server.listen(port); }