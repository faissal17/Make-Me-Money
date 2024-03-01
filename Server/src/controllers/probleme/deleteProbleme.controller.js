const Probleme = require('../../models/Probleme.schema');

const deletedProbleme = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProbleme = await Probleme.findByIdAndDelete(id);
    if (!deleteProbleme) {
      return res.status(404).json({ message: 'No Probleme found' });
    }
    res.status(200).json({ message: 'Probleme deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
module.exports = deletedProbleme;
