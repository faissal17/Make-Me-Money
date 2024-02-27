const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: null,
  },
  PhoneNumber: {
    type: String,
    default: null,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  Adress: {
    type: String,
    default: null,
  },
  passwordResetToken: {
    type: String,
    default: null,
  },
  role: {
    type: String,
    enum: ["manage", "client", "livreur"],
    default: "client",
  },
  CreatedAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
