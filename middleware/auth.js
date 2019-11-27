const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const id = req.headers.authorization.split(' ')[2];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    // const { userId } = decodedToken;
    // if (req.body.userId && req.body.userId !== userId) {
    if (id !== decodedToken) {
      res.status(401).json({
        message: 'Invalid user ID',
        error: 'error'
      });
    } else {
      next();
    }
  } catch (error) {
    res.status(401).json({
      error: 'You are not logged in, please Login first',
      status: 'error',
      req: req.headers.authorization.split(' ')[1]
    });
  }
};
