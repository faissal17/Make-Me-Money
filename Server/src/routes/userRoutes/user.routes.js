const express = require('express');
const usersRoutes = express.Router();

const getAllUsers = require('../../controllers/user/getAllUser.controller');

usersRoutes.route('/').get(getAllUsers);

module.exports = usersRoutes;
