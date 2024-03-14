const express = require('express');
const experienceRoutes = express.Router();
const { checkAuth } = require('../../middlewares/authMiddleware');

const addExperince = require('../../controllers/experience/addExperience.controller');
const {
  getAllExperiences,
  getUserExperiences,
} = require('../../controllers/experience/getAllExperience.controller');
const getExperienceByID = require('../../controllers/experience/getExperienceByID.controller');
const updateExperience = require('../../controllers/experience/updateExperience.controller');
const deletedExperience = require('../../controllers/experience/deleteExperience.controller');

experienceRoutes
  .route('/')
  .post(addExperince)
  .get(checkAuth, getAllExperiences);
experienceRoutes
  .route('/:id')
  .get(getExperienceByID)
  .put(updateExperience)
  .delete(deletedExperience);

experienceRoutes.route('/current/:id').get(checkAuth, getUserExperiences);

module.exports = experienceRoutes;
