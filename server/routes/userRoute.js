const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new User({ name, email, password });
  console.log(name, email, password);

  try {
    newUser.save();
    res.send("User registered successfully");
  } catch (err) {
    return res.status(404).json({ message: err });
  }
});

module.exports = router;
