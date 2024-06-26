const Experience = require('../../models/Experience.schema');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const cloudinary = require('../../utils/cloudinary');
const fs = require('fs');

dotenv.config();

const addExperience = async (req, res) => {
  const token = req.cookies.token;
  const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

  const {
    name,
    description,
    website,
    earning,
    tags,
    location,
    feedback,
    status,
  } = req.body;

  const imagePath = req.file.path;

  if (
    !name ||
    !description ||
    !imagePath ||
    !website ||
    !earning ||
    !tags ||
    !location ||
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

    const experience = await Experience.create({
      name,
      description,
      image: result.secure_url,
      website,
      earning,
      tags,
      location,
      feedback,
      status,
      user: decodedToken.id,
    });
    return res
      .status(201)
      .json({ status: 'success', message: 'Experience created', experience });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = addExperience;
