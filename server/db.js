const mongoose = require("mongoose");

var mongoURL =
  "mongodb+srv://Abhi:Abhi123@nodeapp.poisr.mongodb.net/pizzaCart?retryWrites=true&w=majority";

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongo DB connection successful");
});
db.on("error", () => {
  console.log("Mongo DB connection failed");
});

module.exports = mongoose;
