const express = require("express");
const ActiveEmailController = require("../controllers/ActiveEmailController");
const ActiveEmail = express.Router();

ActiveEmail.post("/activeEmail", ActiveEmailController.Active);

module.exports = ActiveEmail;
