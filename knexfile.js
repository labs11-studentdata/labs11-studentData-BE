require('dotenv').config()
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

    }

};

//must run as root user
// sudo docker run -it -p 3306:3306 -p 33060:33060 -e MYSQL_ROOT_PASSWORD= mysql