const express = require('express');
const usersRoutes = express.Router();
const multer = require('multer');

const { checkAuth } = require('../../middlewares/authMiddleware');

const {
  getAllUsers,
  getCurrentUser,
} = require('../../controllers/user/getAllUser.controller');
const updateUser = require('../../controllers/user/updateUser.controller');

usersRoutes.route('/').get(getAllUsers);
usersRoutes.route('/current').get(checkAuth, getCurrentUser);

const upload = multer({ dest: 'uploads/' });

usersRoutes.route('/:id').put(upload.single('image'), updateUser);

module.exports = usersRoutes;
