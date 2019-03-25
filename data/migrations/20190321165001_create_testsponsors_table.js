
exports.up = function(knex, Promise) {

    return knex.schema.createTable('sponsors', function(sponsors) {

        sponsors.increments();
        sponsors.integer('sponsorID').notNullable();
        sponsors.string('first_name', 128).notNullable();
        sponsors.string('last_name', 128).notNullable();
        sponsors.integer('phone_number');
        sponsors.string('email', 128).notNullable();

    });

};

exports.down = function(knex, Promise) {

    return knex.schema.dropTableIfExists('sponsors');
  
};