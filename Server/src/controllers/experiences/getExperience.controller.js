const Experience = require('../../models/Experience.schema');

const getAllExperiences = async (req, res) => {
  try {
    const experience = await Experience.find();
    if (!experience) {
      return res.status(400).json({ message: 'No Experience are found' });
    }
    res.status(200).json(experience);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = getAllExperiences;
