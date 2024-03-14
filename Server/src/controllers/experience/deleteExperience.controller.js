const Experience = require('../../models/Experience.schema');
const jwt = require('jsonwebtoken');

const deletedExperience = async (req, res) => {
  try {
    const { id } = req.params;
    const token = req.cookies.token;
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

    const findExperience = await Experience.findById(id);

    if (!findExperience) {
      return res.status(404).json({ message: 'No Experience found' });
    }

    const isAuthorized =
      findExperience.user == decodedToken.id || decodedToken.role === 'Admin';

    if (isAuthorized) {
      const deletedExperience = await Experience.findByIdAndDelete(id);

      if (deletedExperience) {
        return res.status(200).json({ message: 'Experience deleted' });
      }
    }

    return res.status(403).json({ message: 'Unauthorized action' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = deletedExperience;
