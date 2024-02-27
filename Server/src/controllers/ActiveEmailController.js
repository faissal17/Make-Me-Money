const express = require("express");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

dotenv.config();

class ActiveEmailController {
  static Active = async (req, res) => {
    const token = req.query.token;
    console.log(token);
    try {
      console.log(token);
      const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
      if (!decodedToken) {
        return res.status(401).json({ error: "Oh hell no" });
      }
      const email = decodedToken.email;
      await User.findOneAndUpdate(
        { email: email },
        { $set: { isVerified: true } },
        { new: true }
      );

      return res.status(200).json({ success: "Email Activated successfully" });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: "Invalid or expired token." });
    }
  };
}

module.exports = ActiveEmailController;
