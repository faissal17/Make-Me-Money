const express = require('express');
const commentRoutes = express.Router();

const addComment = require('../../controllers/comment/addComment.controller');
const getUserComments = require('../../controllers/comment/getComment.controller');
commentRoutes.post('/:id', addComment);
commentRoutes.get('/', getUserComments);

module.exports = commentRoutes;
