const Project = require('../../models/Project.schema');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const updatedProject = async (req, res) => {
  try {
    const { id } = req.params;
    const token = req.cookies.token;
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

    const { name, description, montant, status } = req.body;

    const updateFields = {
      name,
      description,
      montant,
      status,
    };

    const foundProject = await Project.findById(id);

    if (!foundProject) {
      return res.status(404).json({ message: 'No Project was found' });
    }

    const isAuthorized =
      foundProject.user == decodedToken.id || decodedToken.role === 'Admin';

    if (isAuthorized) {
      const updatedProject = await Project.findByIdAndUpdate(id, updateFields, {
        new: true,
        runValidators: true,
      });

      return res
        .status(200)
        .json({ message: 'Project updated', updatedProject });
    } else {
      return res.status(403).json({
        message: "Unauthorized - You can't update this Project",
      });
    }
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message });
    }

    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
module.exports = updatedProject;
