
exports.up = function(knex, Promise) {

    return knex.schema.createTable('social_worker_visits', function(social_worker_visits) {

        social_worker_visits.increments();

        social_worker_visits.integer('visitID').notNullable();
        
        social_worker_visits.integer('schoolID').notNullable()

        social_worker_visits.integer('user_id').notNullable()

        social_worker_visits.date('visit_date').notNullable();

        social_worker_visits.string('notes', 1000);

    });

};

exports.down = function(knex, Promise) {

    return knex.schema.dropTableIfExists('social_worker_visits');
  
};