// routes for users, for example
// folder for the routers
// we don't want to work with the data here
// we import the controller
// and use those function as handlers to our http methods

// models:
// where is the database most of the time.

// controllers:
// execute what you want to do with the data - manage it
// we write the function that do stuff with the data
// then export it

// views:
//client side - frontend
const express = require("express");
const app = express();
const path = require("node:path");

const { messages, indexRouter } = require("./routes/index");

// Routers
// const indexRouter = require("./routes/index");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { title: "Mini MessageBord", messages });
});

const PORT = 3000;
app.listen(PORT);
