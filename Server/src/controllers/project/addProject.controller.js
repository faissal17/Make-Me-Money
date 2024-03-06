const Project = require('../../models/Project.schema');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const addProject = async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

  const { name, description, montant, status } = req.body;
  if (!name || !description || !montant || !status) {
    return res
      .status(400)
      .json({ status: 'error', message: 'all fields are required' });
  }
  try {
    const project = await Project.create({
      name,
      description,
      montant,
      status,
      user: decodedToken.id,
    });
    return res
      .status(201)
      .json({ status: 'success', message: 'Project created', project });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = addProject;
