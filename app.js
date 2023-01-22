const express = require("express");
const app = express();
const addDays = require("date-fns/addDays");

app.get("/", (request, response) => {
  let newDate = new Date();
  let result = addDays(
    new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate()),
    100
  );
  const date = `${result.getDate()}/${
    result.getMonth() + 1
  }/${result.getFullYear()}`;
  response.send(date);
});

app.listen(3000);

module.exports = app;
