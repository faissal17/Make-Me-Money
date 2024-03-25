const express = require('express');
const commentRoutes = express.Router();

const {
  addComment,
  addProblemeComment,
} = require('../../controllers/comment/addComment.controller');
const getUserComments = require('../../controllers/comment/getComment.controller');
commentRoutes.route('/:id').post(addComment).post(addProblemeComment);
commentRoutes.get('/', getUserComments);

module.exports = commentRoutes;
