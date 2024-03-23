const dotenv = require('dotenv');
const User = require('../../models/User.schema');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

dotenv.config();

class ResetPassworController {
  static resetPassword = async (req, res) => {
    const token = req.query.token;
    console.log(token);
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    if (!decodedToken) {
      return res.json({ error: 'no token was provided' });
    }
    const email = decodedToken.email;
    const salt = await bcryptjs.genSalt(10);

    const hashedPassword = await bcryptjs.hash(req.body.password, salt);
    try {
      const updatedUser = await User.updateOne(
        { email: email },
        { password: hashedPassword },
      );

      return res.status(200).json({ success: 'Password reset successfully' });
    } catch (error) {
      console.log(error.message);
      return res.status(400).json({ error: 'Invalid or expired token.' });
    }
  };
}

module.exports = ResetPassworController;
