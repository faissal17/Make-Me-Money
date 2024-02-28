const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  liked: {
    type: Boolean,
    default: false,
  },
  disliked: {
    type: Boolean,
    default: false,
  },
});

const Like = mongoose.model('Comment', commentSchema);

module.exports = Like;
