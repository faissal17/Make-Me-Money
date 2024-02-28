const express = require('express');

const experienceRoutes = express.Router();

const addExperince = require('../../controllers/experiences/addExperience.controller');
const getAllExperiences = require('../../controllers/experiences/getExperience.controller');
const getExperienceByID = require('../../controllers/experiences/getExperienceByID.controller');
const updateExperience = require('../../controllers/experiences/updateExperience.controller');
const deletedExperience = require('../../controllers/experiences/deleteExperience.controller');

experienceRoutes.route('/').post(addExperince).get(getAllExperiences);
experienceRoutes
  .route('/:id')
  .get(getExperienceByID)
  .put(updateExperience)
  .delete(deletedExperience);

module.exports = experienceRoutes;
