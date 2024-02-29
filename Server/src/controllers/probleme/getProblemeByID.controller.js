const Probleme = require('../../models/Probleme.schema');

const getProblemeByID = async (req, res) => {
  const { id } = req.params;
  try {
    const ProblemeByID = await Probleme.findById(id);
    if (!ProblemeByID) {
      return res.status(404).json({ message: 'No Probleme was found' });
    }
    res.status(200).json({ message: ProblemeByID });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
module.exports = getProblemeByID;
