// orgnaize routes into groups, for each path?
// so we extract the group of routes to their own file

// A route is just a path
const { Router } = require("express");
const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini message Board", messages });
});

module.exports = { messages, indexRouter };
