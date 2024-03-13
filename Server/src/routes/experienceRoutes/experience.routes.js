const express = require('express');
const experienceRoutes = express.Router();
const checkAuth = require('../../middlewares/authMiddleware');

// experienceRoutes.use(checkAuth);

const addExperince = require('../../controllers/experience/addExperience.controller');
const getAllExperiences = require('../../controllers/experience/getAllExperience.controller');
const getExperienceByID = require('../../controllers/experience/getExperienceByID.controller');
const updateExperience = require('../../controllers/experience/updateExperience.controller');
const deletedExperience = require('../../controllers/experience/deleteExperience.controller');

experienceRoutes.route('/').post(addExperince).get(getAllExperiences);
experienceRoutes
  .route('/:id')
  .get(getExperienceByID)
  .put(updateExperience)
  .delete(deletedExperience);

module.exports = experienceRoutes;
