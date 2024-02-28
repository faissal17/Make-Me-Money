const Experience = require('../../models/Experience.schema');

const updateExperience = async (req, res) => {
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

  try {
    const { id } = req.params;
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

    const updatedExperience = await Experience.findByIdAndUpdate(
      id,
      updateFields,
      {
        new: true,
        runValidators: true,
      },
    );

    if (!updatedExperience) {
      return res.status(404).json({ message: 'No Experience was found' });
    }

    res.status(200).json({ message: 'Experience updated', updatedExperience });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = updateExperience;
