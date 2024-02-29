const Probleme = require('../../models/Probleme.schema');

const getAllProbleme = async (req, res) => {
  try {
    const probleme = await Probleme.find();
    if (!probleme) {
      return res.status(400).json({ message: 'No probleme are found' });
    }
    res.status(200).json(probleme);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
module.exports = getAllProbleme;
