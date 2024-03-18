const express = require('express');

const projectRoutes = express.Router();

const {checkAuth} = require('../../middlewares/authMiddleware')

const addProject = require('../../controllers/project/addProject.controller');
const {
  getAllProject,
  getUserProject,
} = require('../../controllers/project/getAllProject.controller');
const getProjectByID = require('../../controllers/project/getProjectByID.controller');
const updatedProject = require('../../controllers/project/updateProject.controller');
const deletedProject = require('../../controllers/project/deleteProject.controller');
projectRoutes.route('/').post(addProject).get(getAllProject);
projectRoutes
  .route('/:id')
  .get(getProjectByID)
  .put(updatedProject)
  .delete(deletedProject);

  projectRoutes.route('/current/:id').get(checkAuth, getUserProject);


module.exports = projectRoutes;
