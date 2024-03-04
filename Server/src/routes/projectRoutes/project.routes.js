const express = require('express');

const projectRoutes = express.Router();

const addProject = require('../../controllers/project/addProject.controller');
const getAllProject = require('../../controllers/project/getAllProject.controller');
const getProjectByID = require('../../controllers/project/getProjectByID.controller');
const updatedProject = require('../../controllers/project/updateProject.controller');
projectRoutes.route('/').post(addProject).get(getAllProject);
projectRoutes.route('/:id').get(getProjectByID).put(updatedProject);

module.exports = projectRoutes;
