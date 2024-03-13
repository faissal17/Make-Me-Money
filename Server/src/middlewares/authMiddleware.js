const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const checkAuth = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Login first - Token missing' });
  }
  next();

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decodedToken;
  } catch (error) {
    console.error(error);
    return res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = checkAuth;
