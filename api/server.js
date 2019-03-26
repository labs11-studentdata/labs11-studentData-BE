const express = require("express");
const cors = require("cors");
const server = express();
const studentRoutes = require('../config/students/studetsRoutes');
const authRoutes = require('../config/auth/authRoutes');
const schoolRoutes = require('../config/schools/schoolRoutes');
const passportSetup = require('../config/auth/passportSetup');
const cookieSession = require('cookie-session');
const passport = require('passport');

server.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [process.env.SESSION_KEY] 
}))

// initialize passport 
server.use(passport.initialize());
server.use(passport.session());
server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
  res.status(200).send("Hello, World!\nLabs 11 studentdata");
})

server.use('/api/students', studentRoutes);
server.use('/auth', authRoutes);
server.use('/api/schools', schoolRoutes);

module.exports = {
  server
};
