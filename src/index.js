const express = require("express");
const { PORT } = require("./config/configServer.js");
const BodyParser = require("body-parser");

const app = express();

const setUpAndStartServer = () => {
  app.use(BodyParser.json());
  app.use(BodyParser.urlencoded({ extended: true }));
  app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
  });
};

setUpAndStartServer();