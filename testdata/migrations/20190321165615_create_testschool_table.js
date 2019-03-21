
exports.up = function(knex, Promise) {

    return knex.schema.createTable('schools', function(schools) {

        schools.increments();
        schools.integer('schoolID').notNullable();
        schools.string('school_name', 128).notNullable();
        schools.string('location', 128).notNullable();

    });

};

exports.down = function(knex, Promise) {

    return knex.schema.dropTableIfExists('schools');
  
};