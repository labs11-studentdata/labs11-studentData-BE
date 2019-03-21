const knex = require('knex');

module.exports = {

    development: {

        client: 'mysql',

        connection: {
            host : 'localhost:3306',
            user: 'root',
            password: 'testdb1',
            database: 'testDB',
        },

        useNullAsDefault: true,

        migrations: {
            directory: './testdata/migrations'
        },

    },

};


