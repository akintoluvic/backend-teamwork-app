const express = require('express')
const app = express()

app.get('/', (req, res, next) => {
    res.json({
        message: 'Req successful'
    })
    next()
})

app.get('/api/v1/', (req, res) => res.send('Hello World!'))

module.exports = app;