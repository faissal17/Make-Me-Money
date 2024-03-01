const Experience = require('../../models/Experience.schema');

const addExperince = async (req, res) => {
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
    res
      .status(201)
      .json({ status: 'succes', message: 'Experience created', experience });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
module.exports = addExperince;
