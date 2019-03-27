const express = require("express");
const cors = require("cors");
const server = express();
const studentRoutes = require('../config/students/studetsRoutes');
const authRoutes = require('../config/auth/authRoutes');
const passportSetup = require('../config/auth/passportSetup');
const passport = require('passport');


// initialize passport 
server.use(passport.initialize());
server.use(passport.session());
server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
  res.status(200).send("Hello, World!\nLabs 11 studentdata");
})

server.use('/api/students', studentRoutes);
server.use('/auth', authRoutes)

module.exports = {
  server
};
