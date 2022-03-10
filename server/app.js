const express = require("express");
const pizzasRoute = require("./routes/pizzasRoute");
const userRoute = require("./routes/userRoute");
const alluserRoute = require("./routes/allUsersRoute");
const db = require("./db");
const loginRoute = require("./routes/loginRoute");
const pizzaRoute = require("./routes/pizzaRoute");
const deleteUserRoute = require("./routes/deleteUserRoute");

//express app
const app = express();

app.use(express.json());
//app.use(express.urlencoded());

app.use("/api/pizzas/", pizzasRoute);
app.use("/api/pizzas/", pizzaRoute);
app.use("/api/users/", userRoute);
app.use("/api/users/", alluserRoute);
app.use("/api/users/", deleteUserRoute);
app.use("/api/users/", loginRoute);

app.get("/", (req, res) => {
  res.send("server working !!!");
});

app.listen(5000, () => "server started running on 5000");
