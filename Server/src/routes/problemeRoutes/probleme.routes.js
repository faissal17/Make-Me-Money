const express = require('express');
const { checkAuth } = require('../../middlewares/authMiddleware');

const problemeRoutes = express.Router();

const addProbleme = require('../../controllers/probleme/addProbleme.contoller');
const {
  getAllProbleme,
  getUserProbleme,
} = require('../../controllers/probleme/getAllProbleme.controller');
const getProblemeByID = require('../../controllers/probleme/getProblemeByID.controller');
const updatedProbleme = require('../../controllers/probleme/updateProbleme.controller');
const deletedProbleme = require('../../controllers/probleme/deleteProbleme.controller');
problemeRoutes.route('/').post(addProbleme).get(getAllProbleme);

problemeRoutes
  .route('/:id')
  .get(getProblemeByID)
  .put(updatedProbleme)
  .delete(deletedProbleme);

problemeRoutes.route('/current/:id').get(checkAuth, getUserProbleme);

module.exports = problemeRoutes;
