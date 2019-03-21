const knex = require('knex');

module.exports = {

    development: {

        client: 'mysql',

        connection: {
            host : 'localhost:3306',
            user: '',
            password: '',
            database: '',
        },

        useNullAsDefault: true,

        migrations: {
            directory: './testdata/migrations'
        },

    },

};

//must run as root user
// sudo docker run -it -p 3306:3306 -p 33060:33060 -e MYSQL_ROOT_PASSWORD= mysql