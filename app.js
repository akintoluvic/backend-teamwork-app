const express = require('express')
const bodyParser = require('body-parser');
const { Client } = require('pg')
const app = express()
const client = new Client()

const connectionString = "postgres://postgres:greene@localhost::1/greene-one";

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());

app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  )

app.get('/', (req, res, next) => {
    res.json({
        message: 'Hello World'
    })
    next()
})

app.get('/api/', function (req, res, next) {
    client.connect(connectionString,function(err,client,done) {
       if(err){
           console.log("not able to get connection "+ err);
           res.status(400).send(err);
       } 
       client.query('SELECT * FROM Student where id = $1', [1],function(err,result) {
           done(); // closing the connection;e
           if(err){
               console.log(err);
               res.status(400).send(err);
           }
           res.status(200).send(result.rows);
       });
    });
    next();
});

app.get('/api/v1/', (req, res) => res.send('Base v1 Req success!'))

module.exports = app;

 
