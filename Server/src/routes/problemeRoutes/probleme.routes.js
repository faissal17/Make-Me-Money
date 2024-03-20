const express = require('express');
const { checkAuth } = require('../../middlewares/authMiddleware');
const multer = require('multer');

const problemeRoutes = express.Router();

const addProbleme = require('../../controllers/probleme/addProbleme.contoller');
const {
  getAllProbleme,
  getUserProbleme,
} = require('../../controllers/probleme/getAllProbleme.controller');
const getProblemeByID = require('../../controllers/probleme/getProblemeByID.controller');
const updatedProbleme = require('../../controllers/probleme/updateProbleme.controller');
const deletedProbleme = require('../../controllers/probleme/deleteProbleme.controller');

const upload = multer({ dest: 'uploads/' });

problemeRoutes
  .route('/')
  .post(upload.single('image'), addProbleme)
  .get(getAllProbleme);

problemeRoutes
  .route('/:id')
  .get(getProblemeByID)
  .put(upload.single('image'), updatedProbleme)
  .delete(deletedProbleme);

problemeRoutes.route('/current/:id').get(checkAuth, getUserProbleme);

module.exports = problemeRoutes;
