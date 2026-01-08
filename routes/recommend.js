const express = require("express");
const Meal = require("../models/Meal");
const router = express.Router();

router.post("/", async (req, res) => {
  const { bmi, goal, budget, prepTime } = req.body;

  let meals = await Meal.find({
    budget,
    prepTime: { $lte: prepTime }
  });

  // AI Scoring
  meals = meals.map(meal => {
    let score = 0;
    if (goal === "weight_loss" && meal.calories < 500) score += 2;
    if (goal === "muscle_gain" && meal.calories > 600) score += 2;
    if (bmi > 25 && meal.calories < 450) score += 1;
    return { ...meal._doc, score };
  });

  meals.sort((a, b) => b.score - a.score);
  res.json(meals.slice(0, 5));
});

module.exports = router;
