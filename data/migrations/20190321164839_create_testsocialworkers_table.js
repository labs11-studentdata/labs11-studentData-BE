
exports.up = function(knex, Promise) {

    return knex.schema.createTable('social_workers', function(social_workers) {

        social_workers.increments();
        social_workers.integer('socialWorkerID').notNullable();
        social_workers.string('first_name', 128).notNullable();
        social_workers.string('last_name', 128).notNullable();
        social_workers.integer('phone_number');
        social_workers.string('email', 128).notNullable();

    });

};

exports.down = function(knex, Promise) {

    return knex.schema.dropTableIfExists('social_workers');
  
};