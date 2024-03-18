const Project = require('../../models/Project.schema');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const deletedProject = async (req, res) => {
  try {
    const { id } = req.params;
    const token = req.cookies.token;
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

    const findProject = await Project.findById(id);

    if (!findProject) {
      return res.status(404).json({ message: 'No Project was found' });
    }

    const isAuthorized =
      findExperience.user == decodedToken.id || decodedToken.role === 'Admin';

    if (isAuthorized) {
      const deletedProject = await Project.findByIdAndDelete(id);

      if (deletedProject) {
        return res.status(404).json({ message: 'Project is deleted' });
      }
    }

    return res.status(403).json({ message: 'Unauthorized action' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = deletedProject;
