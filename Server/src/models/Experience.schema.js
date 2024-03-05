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
    default:
      'https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png',
  },
  website: {
    type: String,
    required: true,
  },
  earning: {
    type: String,
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
  status: {
    type: String,
    enum: ['excellent', 'good', 'not-recommended'],
  },
});

const Experience = mongoose.model('Experience', experienceSchema);

module.exports = Experience;
