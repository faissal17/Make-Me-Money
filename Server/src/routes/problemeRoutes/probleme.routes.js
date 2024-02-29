const express = require('express');

const problemeRoutes = express.Router();

const addProbleme = require('../../controllers/probleme/addProbleme.contoller');
const getAllProbleme = require('../../controllers/probleme/getAllProbleme.controller');

problemeRoutes.route('/').post(addProbleme).get(getAllProbleme);

module.exports = problemeRoutes;
