const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  height: Number,
  weight: Number,
  activityLevel: String
});

module.exports = mongoose.model("User", userSchema);
