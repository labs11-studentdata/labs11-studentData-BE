
exports.up = function(knex, Promise) {

    return knex.schema.createTable('students', function(students) {

        students.increments();
        students.integer('student_id').notNullable();

        students
            .integer('gradeID')
            .notNullable()
            .references('gradeID')
            .inTable('grades');

        students.string('first_name', 128).notNullable();
        students.string('last_name', 128).notNullable();
        students.integer('age').notNullable();

        students
            .integer('schoolID')
            .notNullable()
            .references('schoolID')
            .inTable('schools');

        students.string('photo_url', 128);
        students.string('enrollment_status').defaultTo('current');
        students.boolean('has_insurance');
        students.date('insurance_expiration');
        students.boolean('has_birthcert');
        students.decimal('dues');
        students.boolean('special_needs');
        students.string('contact_first_name', 128).notNullable();
        students.string('contact_last_name', 128).notNullable();
        students.integer('contact_number');


    });

};

exports.down = function(knex, Promise) {

    return knex.schema.dropTableIfExists('students');
  
};
