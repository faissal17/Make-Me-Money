const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const Role = mongoose.model("model", roleSchema);
module.exports = Role;
