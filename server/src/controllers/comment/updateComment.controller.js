const Comment = require('../../models/Comment.schema');

const updateComment = (req, res) => {
  const token = req.cookies.token;
  const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

  const { content } = req.body;

  
};
