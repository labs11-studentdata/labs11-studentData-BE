require('dotenv').config();
const knex = require('knex');

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/studentData.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/productionSeeds'
    },
  },
  production: {
    client: 'mysql',
    connection: {
      host : `${process.env.MYSQL_HOST}`,
      user : `${process.env.MYSQL_USER}`,
      password : `${process.env.MYSQL_PASS}`,
      database : `${process.env.MYSQL_DB}`
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/productionSeeds'
    },
  },
}