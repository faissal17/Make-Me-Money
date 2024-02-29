const express = require('express');

const problemeRoutes = express.Router();

const addProbleme = require('../../controllers/probleme/addProbleme.contoller');

problemeRoutes.route('/').post(addProbleme);

module.exports = problemeRoutes;
