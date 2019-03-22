const express = require("express");

// add cors
// const cors = require("cors");

const configureRoutes = require("./config/routes");

const server = express();
server.use(express.json());

// uncomment after adding cors
server.use(cors());

configureRoutes(server);

module.exports = {
  server
};
