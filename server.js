const express = require("express");
const PORT = process.env.PORT || 3002;
const app = express();
const routes = require("./routes");
const mongoose = require("mongoose");
const passport = require ("passport");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

const root = require('path').join(__dirname, 'client', 'build')
app.use(express.static(root));
app.get("*", (req, res) => {
    res.sendFile('index.html', { root });
})

app.use(passport.initialize());
require("./config/passport");

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.use(routes);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

module.exports = app;