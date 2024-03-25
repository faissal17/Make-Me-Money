const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
  liked: {
    type: Boolean,
    default: false,
  },
  disliked: {
    type: Boolean,
    default: false,
  },
});

const Like = mongoose.model('Like', likeSchema);

module.exports = Like;
