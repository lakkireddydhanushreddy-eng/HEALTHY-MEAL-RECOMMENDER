const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema({
  name: String,
  calories: Number,
  tags: [String],
  prepTime: Number,
  budget: String
});

module.exports = mongoose.model("Meal", mealSchema);
