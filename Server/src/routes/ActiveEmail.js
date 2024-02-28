const express = require("express");
const ActiveEmailController = require("../controllers/authentication/ActiveEmailController");
const ActiveEmail = express.Router();

ActiveEmail.post("/activeEmail", ActiveEmailController.Active);

module.exports = ActiveEmail;
