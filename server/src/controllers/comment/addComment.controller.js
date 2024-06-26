const Comment = require('../../models/Comment.schema');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const Experience = require('../../models/Experience.schema');
const Probleme = require('../../models/Probleme.schema');

dotenv.config();

const addComment = async (req, res) => {
  const { id } = req.params;
  const token = req.cookies.token;
  const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

  const { content } = req.body;

  try {
    const comment = await Comment.create({
      content,
      user: decodedToken.id,
    });
    const existingExperience = await Experience.findById(id);

    existingExperience.comments.push(comment._id);
    await existingExperience.save();
    return res
      .status(201)
      .json({ status: 'success', message: 'comment created', comment });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const addProblemeComment = async (req, res) => {
  const { id } = req.params;
  const token = req.cookies.token;
  const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

  const { content } = req.body;

  try {
    const comment = await Comment.create({
      content,
      user: decodedToken.id,
    });
    const existingProbleme = await Probleme.findById(id);

    existingProbleme.comments.push(comment._id);
    await existingProbleme.save();
    return res
      .status(201)
      .json({ status: 'success', message: 'comment created', comment });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
module.exports = { addComment, addProblemeComment };
