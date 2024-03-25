const mongoose = require('mongoose');

const problemeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  feedback: {
    type: String,
    required: true,
  },
  tags: [String],

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
    enum: ['It can wait', 'urgent', 'dangerous'],
  },
});

const Probleme = mongoose.model('Probleme', problemeSchema);

module.exports = Probleme;
