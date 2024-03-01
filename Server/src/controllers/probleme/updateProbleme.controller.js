const Probleme = require('../../models/Probleme.schema');

const updateProbleme = async (req, res) => {
  const { name, description, website, tags, feedback, status } = req.body;
  try {
    const { id } = req.params;
    const updateFields = {
      name,
      description,
      website,
      tags,
      feedback,
      status,
    };
    const updatedProbleme = await Probleme.findByIdAndUpdate(id, updateFields, {
      new: true,
      runValidators: true,
    });

    if (!updatedProbleme) {
      return res.status(404).json({ message: 'No Probleme was found' });
    }
    res.status(200).json({ message: 'Experience updated', updatedProbleme });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
module.exports = updateProbleme;
