const Project = require('../../models/Project.schema');

const getProjectByID = async (req, res) => {
  const { id } = req.params;
  try {
    const projectId = await Project.findById(id);
    if (!projectId) {
      return res.status(404).json({ message: 'No Project was found' });
    }
    res.status(200).json({ message: projectId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
module.exports = getProjectByID;
