const Experience = require('../../models/Experience.schema');
const jwt = require('jsonwebtoken');
const deletedExperience = async (req, res) => {
  const { id } = req.params;
  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

  try {
    const findExperince = await Experience.findById(id);
    if (findExperince.user == decodedToken.id || decodedToken.role == 'Admin') {
      const deletedExperience = await Experience.findByIdAndDelete(id);
      if (!deletedExperience) {
        return res.status(404).json({ message: 'No Experience found' });
      }
      res.status(200).json({ message: 'Experience deleted' });
    } else {
      res
        .status(500)
        .json({ message: 'You cant do this action its not your role' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = deletedExperience;
