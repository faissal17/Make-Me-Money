const mongoose = require('mongoose');
const experienceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  earning: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  tags: [String],
  location: {
    type: String,
    required: true,
  },
  feedback: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null,
  },
  like: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Like',
    default: null,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
  status: {
    type: String,
    enum: ['excellent', 'good', 'not-recommended'],
  },
});

const Experience = mongoose.model('Experience', experienceSchema);

module.exports = Experience;
