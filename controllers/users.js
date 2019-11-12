const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db');

exports.getUsers = (request, response) => {
  db.query('SELECT * FROM users ORDER BY userId ASC', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

exports.getUserById = (request, response) => {
  // eslint-disable-next-line radix
  const id = parseInt(request.params.id);
  db.query('SELECT * FROM users WHERE userId = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

exports.signIn = (request, response) => {
  const { email, password } = request.body;
  db.query('SELECT * FROM users WHERE email = $1', [email], (error, results) => {
    if (results.rows.length < 1) {
      return response.status(401).json({ status: error, error: 'User with the email not found' });
    }
    return bcrypt
      .compare(password, results.rows[0].password)
      .then(valid => {
        if (!valid) {
          return response.status(401).json({ status: error, error: 'Incorrect password' });
        }
        const token = jwt.sign({ userId: results.rows[0].userid }, 'RANDOM_TOKEN_SECRET', {
          expiresIn: '24h'
        });
        return response.status(200).json({
          userId: results.rows[0].userid,
          token
        });
      })
      .catch(err => {
        response.status(500).json({
          message: 'Cannot signin, do try again',
          err
        });
      });
  });
};

exports.createUser = (request, response) => {
  const {
    firstName,
    lastName,
    email,
    password,
    gender,
    jobRole,
    department,
    address
  } = request.body;
  bcrypt.hash(password, 10).then(hash => {
    db.query(
      'INSERT INTO users (firstName, lastName, email, password, gender, jobRole, department, address) VALUES ($1, $2, $3, $4, $5, $6, $7, $8 ) RETURNING userId',
      [firstName, lastName, email, hash, gender, jobRole, department, address],
      (error, results) => {
        if (error) {
          response.status(400).json({
            status: 'error',
            error
          });
        }
        const token = jwt.sign({ userId: results.rows[0].userid }, 'RANDOM_TOKEN_SECRET', {
          expiresIn: '24h'
        });
        response.status(201).json({
          status: 'success',
          data: {
            token,
            message: 'User Created Successfully',
            email,
            userId: results.rows[0].userid,
            firstName,
            lastName,
            gender,
            jobRole,
            department,
            address
          }
        });
      }
    );
  });
};

exports.updateUser = (request, response) => {
  // eslint-disable-next-line radix
  const userId = parseInt(request.params.id);
  const { firstName, lastName } = request.body;
  db.query(
    'UPDATE users SET firstName = $1, lastName = $2 WHERE userId = $3',
    [firstName, lastName, userId],
    error => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User modified with ID: ${userId}`);
    }
  );
};

exports.deleteUser = (request, response) => {
  // eslint-disable-next-line radix
  const userId = parseInt(request.params.id);

  db.query('DELETE FROM users WHERE userId = $1', [userId], error => {
    if (error) {
      throw error;
    }
    response.status(200).send(`User deleted with ID: ${userId}`);
  });
};
