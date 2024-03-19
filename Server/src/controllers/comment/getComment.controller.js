const Comment = require('../../models/Comment.schema');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const getUserComments = async (req, res) => {
  const { id } = req.params;
  try {
    const Comment = await Comment.find({ articl: id });
    if (!Comment) {
      return res.status(400).json({ message: 'No Comment are found' });
    }
    res.status(200).json(Comment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
module.exports = getUserComments;
