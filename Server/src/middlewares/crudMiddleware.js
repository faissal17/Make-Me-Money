const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const checkCrud = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Login first - Token missing' });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    const userRole = decodedToken.role;
    console.log(userRole.id);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = checkCrud;
