const Project = require('../../models/Project.schema');

const updatedProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, montant, status } = req.body;
    const updateFields = {
      name,
      description,
      montant,
      status,
    };
    const updatedProject = await Project.findByIdAndUpdate(id, updateFields, {
      new: true,
      runValidators: true,
    });
    if (!updatedProject) {
      return res.status(404).json({ message: 'No Project was found' });
    }
    res.status(200).json({ message: 'Project updated', updatedProject });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message });
    }
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
module.exports = updatedProject;
