const express = require("express");
const app = express();
const addDays = require("date-fns/addDays");

app.get("/", (request, response) => {
  let newDate = addDays(new Date(2022, 1, 16), 100);
  const date = `${newDate.getDate()}/${
    newDate.getMonth() + 1
  }/${newDate.getFullYear()}`;
  response.send(date);
});

app.listen(3000);

module.exports = app;
