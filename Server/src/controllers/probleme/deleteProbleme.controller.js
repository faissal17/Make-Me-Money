const Probleme = require('../../models/Probleme.schema');
const jwt = require('jsonwebtoken');

const deletedProbleme = async (req, res) => {
  try {
    const { id } = req.params;
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

    const findProbleme = await Probleme.findById(id);

    if (!findProbleme) {
      return res.status(404).json({ message: 'No Probleme was found' });
    }

    const isAuthorized =
      findProbleme.user == decodedToken.id || decodedToken.role === 'Admin';

    if (isAuthorized) {
      const deletedProbleme = await Probleme.findByIdAndDelete(id);

      if (deletedProbleme) {
        return res.status(200).json({ message: 'Probleme deleted' });
      }
    }

    return res.status(403).json({ message: 'Unauthorized action' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = deletedProbleme;
