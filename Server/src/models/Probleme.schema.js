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
    default:
      'https://res.cloudinary.com/dx6vl9jdq/image/upload/v1710327514/img_emgaqu.jpg',
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
  status: {
    type: String,
    enum: ['It can wait', 'urgent', 'dangerous'],
  },
});

const Probleme = mongoose.model('Probleme', problemeSchema);

module.exports = Probleme;
