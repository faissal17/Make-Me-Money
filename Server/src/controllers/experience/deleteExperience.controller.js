const Experience = require('../../models/Experience.schema');

const deletedExperience = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedExperience = await Experience.findByIdAndDelete(id);
    if (!deletedExperience) {
      return res.status(404).json({ message: 'No Experience found' });
    }
    res.status(200).json({ message: 'Experience deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
module.exports = deletedExperience;
