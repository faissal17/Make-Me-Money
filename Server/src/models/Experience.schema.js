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
      'https://res.cloudinary.com/dx6vl9jdq/image/upload/v1710768184/How_Do_You_Make_Money_Posting_on_Pinterest__ufc98e.jpg',
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
  comment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment',
    default: null,
  },
  status: {
    type: String,
    enum: ['excellent', 'good', 'not-recommended'],
  },
});

const Experience = mongoose.model('Experience', experienceSchema);

module.exports = Experience;
