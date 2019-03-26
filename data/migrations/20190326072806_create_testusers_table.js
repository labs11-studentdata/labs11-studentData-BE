
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (tbl) => {
      tbl.increments('user_id');
      tbl.string('auth_id');
      tbl.string('firstname');
      tbl.string('lastname');
      tbl.string('email');
      tbl.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
