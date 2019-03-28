
exports.up = function(knex, Promise) {
  return knex.schema.createTable('donations', function(donations) {
    donations.increments();
    donations.integer('donationID');
    donations.integer('user_ID');
    donations.integer('student_id');
    donations.integer('schoolID');
    donations.integer('donation_total');
    donations.date('donation_date');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('donations');
};
