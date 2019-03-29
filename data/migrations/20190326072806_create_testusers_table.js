
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(users) {
      users.increments();
      users.integer('user_ID').increments();
      users.integer('schoolID');
      users.string('auth_id');
      users.string('first_name');
      users.string('last_name');
      users.string('email');
      users.string('photo_url', 128);
      users.string('account_type');
      users.integer('user_permissions');
      users.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
