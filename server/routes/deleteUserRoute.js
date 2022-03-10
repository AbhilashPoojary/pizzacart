const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.post("/deleteUser", async (req, res) => {
  debugger;
  console.log(req.body);
  try {
    await User.findByIdAndDelete(req.body.id).exec();
    res.send("User deleted successfully");
  } catch (err) {
    return res.status(404).json({ message: err });
  }
});

module.exports = router;
