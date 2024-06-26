const express = require("express");
const ResetPassworRouter = express.Router();
const ResetPassworController = require("../../controllers/authentication/ResetPasswordController");

ResetPassworRouter.post("/resetpassword", ResetPassworController.resetPassword);

module.exports = ResetPassworRouter;
