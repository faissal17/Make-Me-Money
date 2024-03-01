const express = require('express');

const projectRoutes = express.Router();

const addProject = require('../../controllers/project/addProject.controller');

projectRoutes.route('/').post(addProject);

module.exports = projectRoutes;
