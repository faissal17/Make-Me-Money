const express = require('express');

const problemeRoutes = express.Router();

const addProbleme = require('../../controllers/probleme/addProbleme.contoller');
const getAllProbleme = require('../../controllers/probleme/getAllProbleme.controller');
const getProblemeByID = require('../../controllers/probleme/getProblemeByID.controller');
const updatedProbleme = require('../../controllers/probleme/updateProbleme.controller');
problemeRoutes.route('/').post(addProbleme).get(getAllProbleme);

problemeRoutes.route('/:id').get(getProblemeByID).put(updatedProbleme);

module.exports = problemeRoutes;
