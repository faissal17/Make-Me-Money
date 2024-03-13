const express = require('express');
const usersRoutes = express.Router();

const {
  getAllUsers,
  getCurrentUser,
} = require('../../controllers/user/getAllUser.controller');
const { checkAuth } = require('../../middlewares/authMiddleware');

usersRoutes.route('/').get(getAllUsers);
usersRoutes.route('/current').get(checkAuth, getCurrentUser);

module.exports = usersRoutes;
