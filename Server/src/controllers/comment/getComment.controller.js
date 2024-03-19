const Comment = require('../../models/Comment.schema');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const getUserComments = async (req, res) => {
  const { id } = req.params;
  try {
    const comment = await Comment.find().populate('user');
    if (!comment) {
      return res.status(400).json({ message: 'No Comment are found' });
    }
    res.status(200).json(comment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
module.exports = getUserComments;
