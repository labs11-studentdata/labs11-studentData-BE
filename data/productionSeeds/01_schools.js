
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('schools').del()
    .then(function () {
      // Inserts seed entries
      return knex('schools').insert([
      {"school_name":"American Nailwort","location":"Manghit"},
      {"school_name":"Lady's Tresses","location":"Carromeu"},]);
    });
};
