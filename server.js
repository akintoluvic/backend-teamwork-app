const http = require('http');

const server = http.createServer((req, res) => {
    res.send('This first response');
})

server.listen(process.env.PORT || 3000)