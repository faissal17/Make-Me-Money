const Probleme = require('../../models/Probleme.schema');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const cloudinary = require('../../utils/cloudinary');
const fs = require('fs');

dotenv.config();

const addProbleme = async (req, res) => {
  const token = req.cookies.token;
  const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

  const { name, description, website, tags, feedback, status } = req.body;

  const imagePath = req.file.path;

  if (
    !name ||
    !description ||
    !imagePath ||
    !website ||
    !tags ||
    !feedback ||
    !status
  ) {
    fs.unlinkSync(imagePath);
    return res
      .status(400)
      .json({ status: 'error', message: 'All fields are required' });
  }

  try {
    const result = await cloudinary.uploader.upload(imagePath, {
      folder: 'MMM',
    });
    fs.unlinkSync(imagePath);
    const probleme = await Probleme.create({
      name,
      description,
      image: result.secure_url,
      website,
      tags,
      feedback,
      status,
      user: decodedToken.id,
    });

    res
      .status(201)
      .json({ status: 'success', message: 'Probleme created', probleme });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = addProbleme;
