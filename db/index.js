const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, (err, res) => {
      callback(err, res);
    });
  },
  getClient: callback => {
    pool.connect((err, client, done) => {
      callback(err, client, done);
    });
  }
};
