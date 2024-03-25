const Probleme = require('../../models/Probleme.schema');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const cloudinary = require('../../utils/cloudinary');
const fs = require('fs');

dotenv.config();

const updateProbleme = async (req, res) => {
  try {
    const { id } = req.params;
    const token = req.cookies.token;
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    const { name, description, website, tags, feedback, status } = req.body;

    const updateFields = {
      name,
      description,
      website,
      tags,
      feedback,
      status,
    };

    const foundProbleme = await Probleme.findById(id);

    if (!foundProbleme) {
      return res.status(404).json({ message: 'No Probleme was found' });
    }

    const isAuthorized =
      foundProbleme.user == decodedToken.id || decodedToken.role === 'Admin';

    if (!isAuthorized) {
      return res.status(403).json({
        message: "Unauthorized - You can't update this probleme",
      });
    }

    if (req.file) {
      const imagePath = req.file.path;

      try {
        const result = await cloudinary.uploader.upload(imagePath, {
          folder: 'MMM', 
        });
        fs.unlinkSync(imagePath);

        updateFields.image = result.secure_url;
      } catch (uploadError) {
        console.error(uploadError);
        return res.status(500).json({ message: 'Error uploading image' });
      }
    }

    const updatedProbleme = await Probleme.findByIdAndUpdate(
      id,
      updateFields,
      {
        new: true,
        runValidators: true,
      },
    );

    return res
      .status(200)
      .json({ message: 'Probleme updated', updatedProbleme });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message });
    }

    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = updateProbleme;
