const express = require("express");
const ForgetPasswordController = require("../controllers/forgetPasswordController");
const forgetPassRouter = express.Router();

forgetPassRouter.post("/forgetpassword", ForgetPasswordController.forget);

module.exports = forgetPassRouter;
