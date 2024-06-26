const User = require('../../models/User.schema');

const getAllUsers = async (req, res) => {
  try {
    const user = await User.find();
    if (!user) {
      return res.status(400).json({ message: 'No user are found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
const getCurrentUser = async (req,res)=>{
  
  try {
    const user = await User.findById(req.user.id,{password:0, __v:0});
    if (!user) {
      return res.status(400).json({ message: 'No user are found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
module.exports = {getAllUsers, getCurrentUser};
