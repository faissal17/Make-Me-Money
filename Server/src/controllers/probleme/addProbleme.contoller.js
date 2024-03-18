const Probleme = require('../../models/Probleme.schema');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const addProbleme = async (req, res) => {
  const token = req.cookies.token;
  const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

  const { name, description, website, tags, feedback, status } = req.body;

  if (!name || !description || !website || !tags || !feedback || !status) {
    return res
      .status(400)
      .json({ status: 'error', message: 'All fields are required' });
  }

  try {
    const probleme = await Probleme.create({
      name,
      description,
      website,
      tags,
      feedback,
      status,
      user: decodedToken.id,
    });

    res
      .status(201)
      .json({ status: 'success', message: 'Probleme created', probleme });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = addProbleme;
