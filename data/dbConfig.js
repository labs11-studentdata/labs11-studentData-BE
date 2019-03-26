const knex = require('knex');
const knexConfig = require('../knexfile');
const dbENV = process.env.DB_ENV || 'development';
const db = knex(knexConfig[dbENV]);

module.exports = db;