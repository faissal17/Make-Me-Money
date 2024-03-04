const express = require('express');

const projectRoutes = express.Router();

const addProject = require('../../controllers/project/addProject.controller');
const getAllProject = require('../../controllers/project/getAllProject.controller');
const getProjectByID = require('../../controllers/project/getProjectByID.controller');
projectRoutes.route('/').post(addProject).get(getAllProject);
projectRoutes.route('/:id').get(getProjectByID);

module.exports = projectRoutes;
