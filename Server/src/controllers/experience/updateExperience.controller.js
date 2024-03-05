const Experience = require('../../models/Experience.schema');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const updateExperience = async (req, res) => {
  const { id } = req.params;
  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
  try {
    const {
      name,
      description,
      website,
      earning,
      tags,
      location,
      feedback,
      status,
    } = req.body;

    const updateFields = {
      name,
      description,
      website,
      earning,
      tags,
      location,
      feedback,
      status,
    };

    const foundExperience = await Experience.findById(id);

    if (!foundExperience) {
      return res.status(404).json({ message: 'No Experience was found' });
    }
    if (
      foundExperience.user == decodedToken.id ||
      decodedToken.role == 'Admin'
    ) {
      const updatedExperience = await Experience.findByIdAndUpdate(
        id,
        updateFields,
        {
          new: true,
          runValidators: true,
        },
      );

      res
        .status(200)
        .json({ message: 'Experience updated', updatedExperience });
    } else {
      res.status(403).json({
        message: "Unauthorized - You can't update this experience",
      });
    }
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message });
    }

    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = updateExperience;
