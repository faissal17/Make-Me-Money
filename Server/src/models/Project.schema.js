const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
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
      'https://res.cloudinary.com/dx6vl9jdq/image/upload/v1710768123/web_vrh40j.jpg',
  },
  montant: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null,
  },
  status: {
    type: String,
    required: true,
  },
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
