const express = require('express');

const experienceRoutes = express.Router();

const addExperince = require('../../controllers/experiences/addExperience.controller');

experienceRoutes.route('/').post(addExperince);

module.exports = experienceRoutes;
