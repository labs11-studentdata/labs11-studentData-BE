
exports.up = function(knex, Promise) {

    return knex.schema.createTable('students', function(students) {

        students.increments();
        students.string('name', 128).notNullable();
        students.integer('age').notNullable();
        students.string('school').notNullable();

    });

};

exports.down = function(knex, Promise) {

    return knex.schema.dropTableIfExists('students');
  
};
