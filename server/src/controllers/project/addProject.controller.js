const Project = require('../../models/Project.schema');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const cloudinary = require('../../utils/cloudinary');
const fs = require('fs');

dotenv.config();

const addProject = async (req, res) => {
  const token = req.cookies.token;
  const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

  const { name, description, montant, status } = req.body;

  const imagePath = req.file.path;

  if (!name || !description || !imagePath || !montant || !status) {
    fs.unlinkSync(imagePath);
    return res
      .status(400)
      .json({ status: 'error', message: 'all fields are required' });
  }
  try {
    const result = await cloudinary.uploader.upload(imagePath, {
      folder: 'MMM',
    });
    fs.unlinkSync(imagePath);

    const project = await Project.create({
      name,
      description,
      image: result.secure_url,
      montant,
      status,
      user: decodedToken.id,
    });
    return res
      .status(201)
      .json({ status: 'success', message: 'Project created', project });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = addProject;
