
exports.up = function(knex, Promise) {
  return knex.schema.createTable('donations', function(donations) {

    donations.increments('donationID');

    donations
      .integer('userID')
      .unsigned()
      .notNullable()

    donations.foreign('userID').references('users.userID')

    donations
      .integer('studentID')
      .unsigned()
      .notNullable()

    donations.foreign('studentID').references('students.studentID')


    donations
      .integer('schoolID')
      .unsigned()
      .notNullable()

    donations.foreign('schoolID').references('schools.schoolID')

    donations.integer('donation_total');
    donations.timestamps(true, true);

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('donations');
};
