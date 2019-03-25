const express = require("express");
const cors = require("cors");
const server = express();
const studentRoutes = require('../config/students/studetsRoutes');
server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
  res.status(200).send("Hello, World!\nLabs 11 studentdata");
})

server.use('/api/students', studentRoutes);


module.exports = {
  server
};
