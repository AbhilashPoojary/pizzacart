const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.get("/getalluser", async (req, res) => {
  try {
    const user = await User.find({});
    res.send(user);
  } catch (err) {
    return res.status(404).json({ message: err });
  }
});
module.exports = router;
