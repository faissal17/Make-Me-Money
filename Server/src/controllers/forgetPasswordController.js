const User = require("../models/User");
const sendEmail = require("../utils/sendEmail");
const dotenv = require("dotenv");

dotenv.config();
class ForgetPasswordController {
  static forget = async (req, res) => {
    const { email } = req.body;
    if (!email) {
      res.status(401).json({ message: "Please enter your registered email" });
    }
    try {
      const checkUserEmail = await User.findOne({ email });
      if (!checkUserEmail) {
        res.status(403).json({ message: "No user found with this email." });
      } else {
        sendEmail(email);
        res.status(200).json({
          message:
            "Please check your email you will find a link to reset your password",
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
}
module.exports = ForgetPasswordController;
