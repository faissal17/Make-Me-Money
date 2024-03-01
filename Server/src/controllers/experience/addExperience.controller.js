const Experience = require('../../models/Experience.schema');

const addExperience = async (req, res) => {
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

  if (
    !name ||
    !description ||
    !website ||
    !earning ||
    !tags ||
    !location ||
    !feedback ||
    !status
  ) {
    return res
      .status(400)
      .json({ status: 'error', message: 'All fields are required' });
  }

  try {
    const experience = await Experience.create({
      name,
      description,
      website,
      earning,
      tags,
      location,
      feedback,
      status,
    });
    return res
      .status(201)
      .json({ status: 'success', message: 'Experience created', experience });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = addExperience;
