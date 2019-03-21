const knex = require('knex');

module.exports = {

    development: {

        client: 'sqlite3',

        connection: {
            filename: './testdata/testDB.sqlite3'
        },

        useNullAsDefault: true,

        migrations: {
            directory: './testdata/migrations'
        },

        seeds: { directory: './testdata/seeds' },

    },

};

//must run as root user
// sudo docker run -it -p 3306:3306 -p 33060:33060 -e MYSQL_ROOT_PASSWORD= mysql