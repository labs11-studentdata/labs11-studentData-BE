const express = require('express');
const server = express();

const knex = require('knex');

const knexConfig = require('../../knexfile');

const db = knex(knexConfig.development);


//should return a list of all schools
server.get('/', (req, res) => {

  const DB_ENV = process.env.DB_ENV;
  const MYSQL_HOST = process.env.MYSQL_HOST;
  res.status(200).json({DB_ENV: DB_ENV, MYSQL_HOST: MYSQL_HOST});

});

module.exports = server;