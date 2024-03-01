const Project = require('../../models/Project.schema');

const getAllProject = async (req, res) => {
  try {
    const project = await Project.find();
    if (!project) {
      return res.status(400).json({ message: 'No probleme are found' });
    }
    res.status(200).json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = getAllProject;
