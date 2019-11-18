const http = require('http')
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config();
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-multi-assign
const exports = (module.exports = {});

const port = process.env.PORT || 3000;
app.set('port', port);

const server = http.createServer(app);

if (!module.parent) {
  server.listen(port);
}
