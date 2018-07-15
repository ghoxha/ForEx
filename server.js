const express = require("express");
const mongoose = require("mongoose");
const users = require("./routes/api/users");
const portfolio = require("./routes/api/portfolio");

const bodyParser = require("body-parser");
const passport = require("passport");

const app = express();
//database configuration
const db = require("./config/keys").mongoURI;

//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// connect mongodb
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

//passport middleware
app.use(passport.initialize());
//passport config
require("./config/passport")(passport);
//Use routes
app.use("/api/users", users);
app.use("/api/portfolio", portfolio);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
