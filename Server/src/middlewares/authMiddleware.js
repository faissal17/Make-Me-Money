const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const checkAuth = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Login first - Token missing' });
  }
  next();
};

module.exports = checkAuth;
