const mongoose = require("mongoose");

const url =
  "mongodb+srv://faissalaoukacha:johancruyff14@cluster0.byif7c3.mongodb.net/AlloMedia?retryWrites=true&w=majority";
mongoose.connect(url).then(() => {
  console.log("connected");
});

module.exports = mongoose;
