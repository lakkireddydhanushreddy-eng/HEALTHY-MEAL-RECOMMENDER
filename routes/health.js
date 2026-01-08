const express = require("express");
const router = express.Router();

router.post("/bmi", (req, res) => {
  const { weight, height, age, gender } = req.body;

  const bmi = weight / ((height / 100) ** 2);
  const bmr = gender === "male"
    ? 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)
    : 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);

  res.json({ bmi: bmi.toFixed(2), bmr: bmr.toFixed(0) });
});

module.exports = router;
