const express = require('express');
const server = express();

//should return the current env and mysql host
server.get('/', (req, res) => {

  const DB_ENV = process.env.DB_ENV;
  const MYSQL_HOST = process.env.MYSQL_HOST;
  res.status(200).json({DB_ENV: DB_ENV, MYSQL_HOST: MYSQL_HOST});

});

module.exports = server;