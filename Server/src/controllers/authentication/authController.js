const hashPassword = require('../../helpers/hashPassword');
const User = require('../../models/User.schema');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const SendActivateEmail = require('../../utils/sendActivateEmail');

const dotenv = require('dotenv');

dotenv.config();

class authController {
  static register = async (req, res) => {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ status: 'error', message: 'All fields are required' });
    }
    try {
      const checkUserEmail = await User.findOne({ email });
      if (checkUserEmail) {
        return res
          .status(400)
          .json({ status: 'error', message: 'This email already exists' });
      }
      // SendActivateEmail(email);
      const hashedPassword = await hashPassword(password);
      const user = await User.create({
        name,
        email,
        password: hashedPassword,
        role,
      });
      const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.SECRET_KEY,
      );
      res.status(201).json({ message: 'User created', token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

  static login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        status: 'error',
        message: 'email or password are not allowed to be empty',
      });
    }
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({
          status: 'error',
          message: 'No user found with this email.',
        });
      }
      const passwordMatch = await bcryptjs.compare(password, user.password);
      if (passwordMatch) {
        const token = jwt.sign(
          { id: user._id, role: user.role },
          process.env.SECRET_KEY,
        );
        return res.status(200).json({
          status: 'success',
          message: 'Login successful',
          token: token,
        });
      } else {
        return res
          .status(400)
          .json({ status: 'error', message: 'Incorrect password.' });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'server error' });
    }
  };

  static logout = async (req, res) => {
    res.clearCookie('token');
    res.status(201).json({ message: 'you are logged out' });
  };
}

module.exports = authController;
