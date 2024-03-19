const Comment = require('../../models/Comment.schema');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const addComment = async (req, res) => {
  const token = req.cookies.token;
  const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

  try {
    const comment = await Comment.create({
      content,
      user: decodedToken.id,
    });
    return res
      .status(201)
      .json({ status: 'success', message: 'comment created', comment });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
module.exports = addComment;
