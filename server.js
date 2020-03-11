//DEPENDENCIES

const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.Promise = global.Promise; 
mongoose.connect( process.env.MONGODB_URI || "mongodb://mr-andersen523:password123@ds049538.mlab.com:49538/heroku_4jnrfhdk", 
{ useNewUrlParser: true, useFindAndModify: false });

// ROUTES
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
