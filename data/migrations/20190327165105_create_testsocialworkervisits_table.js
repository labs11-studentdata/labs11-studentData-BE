
exports.up = function(knex, Promise) {

    return knex.schema.createTable('social_worker_visits', function(social_worker_visits) {

        social_worker_visits.increments('visitID').notNullable();
        
        social_worker_visits
            .integer('schoolID')
            .unsigned()
            .notNullable()
        
        social_worker_visits.foreign('schoolID').references('schools.schoolID');

        social_worker_visits
            .integer('userID')
            .unsigned()
            .notNullable()

        social_worker_visits.foreign('userID').references('users.userID');

        social_worker_visits.date('visit_date').notNullable();

        social_worker_visits.string('notes', 1000);

    });

};

exports.down = function(knex, Promise) {

    return knex.schema.dropTableIfExists('social_worker_visits');
  
};