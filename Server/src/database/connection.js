const mongoose = require('mongoose');

const url =
  'mongodb+srv://faissalaoukacha:johancruyff14@cluster0.byif7c3.mongodb.net/MakeMeMoney?retryWrites=true&w=majority';
mongoose.connect(url).then(() => {
  console.log('connected');
});

module.exports = mongoose;
