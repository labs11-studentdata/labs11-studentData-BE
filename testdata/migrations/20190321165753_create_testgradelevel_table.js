
exports.up = function(knex, Promise) {

    return knex.schema.createTable('grades', function(grades) {

        grades.increments();

        grades.integer('gradeID').notNullable();

        grades
            .integer('schoolID')
            .notNullable()
            .references('schoolID')
            .inTable('schools');

    });

};

exports.down = function(knex, Promise) {

    return knex.schema.dropTableIfExists('grades');
  
};