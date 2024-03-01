const Project = require('../../models/Project.schema');

const addProject = async (req, res) => {
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
