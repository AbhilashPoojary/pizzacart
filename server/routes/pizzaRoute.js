const express = require("express");
const router = express.Router();
const Pizza = require("../models/pizzaModel");

router.post("/newPizza", (req, res) => {
  const { description, image, name, prices, category, varients } = req.body;
  const newPizza = new Pizza({
    name,
    varients,
    prices,
    category,
    image,
    description,
  });

  try {
    newPizza.save();
    res.send("Product added sucessfully");
  } catch (err) {
    return res.status(404).json({ message: err });
  }
});

module.exports = router;
