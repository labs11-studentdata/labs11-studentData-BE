const express = require("express");
const cors = require("cors");
const server = express();
const studentRoutes = require('../config/students/studetsRoutes');
const socialWorkerVisitRoutes = require('../config/socialWorkerVisits/socialWorkerVisitRoutes');
const authRoutes = require('../config/auth/authRoutes');
const schoolRoutes = require('../config/schools/schoolRoutes');
const passportSetup = require('../config/auth/passportSetup');
const userRoutes = require('../config/users/usersRoutes');
const passport = require('passport');


// initialize passport 
server.use(passport.initialize());
server.use(passport.session());
server.use(express.json());
server.use(cors());
server.use(express.static('public'))

server.get('/', (req, res) => {
  res.status(200).send("Hello, World!\nLabs 11 studentdata");
})

server.use('/api/students', studentRoutes);
server.use('/api/social_worker_visits', socialWorkerVisitRoutes);
server.use('/auth', authRoutes)
server.use('/api/schools', schoolRoutes);
server.use('/api/users', userRoutes);

module.exports = {
  server
};
