const express = require('express');
const commentRoutes = express.Router();

const addComment = require('../../controllers/comment/addComment.controller');

commentRoutes.post('/', addComment);

module.exports = commentRoutes;
