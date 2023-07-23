const path = require('path');
const express = require("express");
const app = express();
const dotenv = require("dotenv").config({path:path.resolve('.env')});
const env = dotenv.parsed;

const portNumber = env.PORT_NUMBER;

app.get("/", (req, res) => {
  res.send("Hello Friends!");
});

app.listen(portNumber, () => {
  console.log(`Example app listening on port ${portNumber}!`);
});
