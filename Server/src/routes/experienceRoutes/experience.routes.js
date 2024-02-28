const express = require('express');

const experienceRoutes = express.Router();

const addExperince = require('../../controllers/experiences/addExperience.controller');
const getAllExperiences = require('../../controllers/experiences/getExperience.controller');

experienceRoutes.route('/').post(addExperince).get(getAllExperiences);


module.exports = experienceRoutes;
