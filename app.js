const express = require('express');
const bodyParser = require('body-parser');

// Routes
const userRoutes = require('./routes/users');
const postRoutes = require('./routes/posts');

const app = express();

// CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get('/', (req, res) => {
  res.json({ status: 'success', message: 'Welcome To Testing API' });
});

app.post('/add', (req, res) => {
  const { num1, num2 } = req.body;
  const add = (num1, num2) => {
    return num1 + num2;
  };
  res.json({
    status: 'success',
    result: 'Welcome To Testing API',
    // eslint-disable-next-line no-dupe-keys
    result: add(num1, num2)
  });
});

app.use('/api/v1', express.static('public'));

app.use('/api/v1/auth', userRoutes);
app.use('/api/v1', postRoutes);

module.exports = app;
