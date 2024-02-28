const express = require("express");
const ForgetPasswordController = require("../../controllers/authentication/forgetPasswordController");
const forgetPassRouter = express.Router();

forgetPassRouter.post("/forgetpassword", ForgetPasswordController.forget);

module.exports = forgetPassRouter;
