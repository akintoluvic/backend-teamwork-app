const express = require('express')
const app = express()

app.get('/', (req, res, next) => {
    res.json({
        message: 'Hello World'
    })
    next()
})

app.get('/api/v1/', (req, res) => res.send('Base v1 Req success!'))

module.exports = app;
