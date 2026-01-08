const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();

router.post("/register", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json({ message: "Registered Successfully" });
});

router.post("/login", async (req, res) => {
  const user = await User.findOne(req.body);
  if (!user) return res.status(401).json("Invalid Credentials");

  const token = jwt.sign({ id: user._id }, "SECRET");
  res.json({ token, user });
});

module.exports = router;
