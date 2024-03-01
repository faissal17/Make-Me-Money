const express = require('express');

const projectRoutes = express.Router();

const addProject = require('../../controllers/project/addProject.controller');
const getAllProject = require('../../controllers/project/getAllProject.controller');
projectRoutes.route('/').post(addProject).get(getAllProject);

module.exports = projectRoutes;
