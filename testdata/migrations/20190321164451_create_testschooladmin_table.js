
exports.up = function(knex, Promise) {

    return knex.schema.createTable('school_admins', function(school_admins) {

        school_admins.increments();
        school_admins.integer('adminID').notNullable();
        school_admins.string('first_name', 128).notNullable();
        school_admins.string('last_name', 128).notNullable();
        school_admins.integer('phone_number');
        school_admins.string('email', 128).notNullable();


        school_admins
            .integer('schoolID')
            .notNullable()
            .references('schoolID')
            .inTable('schools');
    });

};

exports.down = function(knex, Promise) {

    return knex.schema.dropTableIfExists('school_admins');
  
};