const Experience = require('../../models/Experience.schema');

const getExperienceByID = async (req, res) => {
  const { id } = req.params;
  try {
    const experienceByID = await Experience.findById(id)
      .populate('user')
      .populate({ path: 'comments', model: 'Comment' });
    if (!experienceByID) {
      return res.status(404).json({ message: 'No Experience was found' });
    }
    res.status(200).json({ message: experienceByID });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
module.exports = getExperienceByID;
