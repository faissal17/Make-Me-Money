const express = require('express');

const projectRoutes = express.Router();
const multer = require('multer');

const { checkAuth } = require('../../middlewares/authMiddleware');

const addProject = require('../../controllers/project/addProject.controller');
const {
  getAllProject,
  getUserProject,
} = require('../../controllers/project/getAllProject.controller');
const getProjectByID = require('../../controllers/project/getProjectByID.controller');
const updatedProject = require('../../controllers/project/updateProject.controller');
const deletedProject = require('../../controllers/project/deleteProject.controller');

const upload = multer({ dest: 'uploads/' });

projectRoutes
  .route('/')
  .post(upload.single('image'), addProject)
  .get(getAllProject);
projectRoutes
  .route('/:id')
  .get(getProjectByID)
  .put(upload.single('image'), updatedProject)
  .delete(deletedProject);

projectRoutes.route('/current/:id').get(checkAuth, getUserProject);

module.exports = projectRoutes;
