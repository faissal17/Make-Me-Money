const dotenv = require("dotenv");
const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

dotenv.config();

class ResetPassworController {
  static resetPassword = async (req, res) => {
    const token = req.query.token;
    console.log(token);
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    if (!decodedToken) {
      return res.json({ error: "oh hell no" });
    }
    const email = decodedToken.email;
    const password = req.body;
    const salt = await bcryptjs.genSalt(10);

    // Hash the new password with the generated salt
    const hashedPassword = await bcryptjs.hash(req.body.password, salt);
    try {
      const updatedUser = await User.updateOne(
        { email: email },
        { password: hashedPassword }
      );

      return res.status(200).json({ success: "Password reset successfully" });
    } catch (error) {
      console.error(error.message);
      return res.status(400).json({ error: "Invalid or expired token." });
    }
  };
}

module.exports = ResetPassworController;
