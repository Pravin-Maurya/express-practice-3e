const express = require("express");

const app = express();

app.get("/", (request, response) => {
  let date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const monthDate = date.getDate();
  response.send(`${monthDate}-${month}-${year}`);
});

module.exports = app;
