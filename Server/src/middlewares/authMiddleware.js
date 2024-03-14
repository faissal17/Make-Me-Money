const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const checkAuth = (req, res, next) => {
  const token = req.cookies['token'];
  console.log(token,req.body)
  if (!token) {
    return res.status(401).json({ error: 'Login first - Token missing' });
  }
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = {checkAuth};
