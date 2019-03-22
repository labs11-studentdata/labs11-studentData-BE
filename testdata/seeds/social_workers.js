
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('social_workers').del()
    .then(function () {
      // Inserts seed entries
      return knex('social_workers').insert([{"socialWorkerID":1,"first_name":"Filide","last_name":"Steanson","phone_number":"7551769377","email":"fsteanson0@cafepress.com"},
      {"socialWorkerID":2,"first_name":"Daveen","last_name":"Basillon","phone_number":"7865170423","email":"dbasillon1@issuu.com"},
      {"socialWorkerID":3,"first_name":"Zitella","last_name":"Eddicott","phone_number":"2365825513","email":"zeddicott2@photobucket.com"},
      {"socialWorkerID":4,"first_name":"Marilee","last_name":"Litchfield","phone_number":"2813632861","email":"mlitchfield3@123-reg.co.uk"},
      {"socialWorkerID":5,"first_name":"Gabe","last_name":"Enever","phone_number":"6977961780","email":"genever4@parallels.com"},
      {"socialWorkerID":6,"first_name":"Odilia","last_name":"Phaup","phone_number":"4528773342","email":"ophaup5@youtube.com"},
      {"socialWorkerID":7,"first_name":"Ophelie","last_name":"Mundow","phone_number":"2894733750","email":"omundow6@pinterest.com"},
      {"socialWorkerID":8,"first_name":"Mano","last_name":"Hixson","phone_number":"8159105060","email":"mhixson7@blogs.com"},
      {"socialWorkerID":9,"first_name":"Lisbeth","last_name":"Warrell","phone_number":"9569408693","email":"lwarrell8@google.co.uk"},
      {"socialWorkerID":10,"first_name":"Brewer","last_name":"Moncey","phone_number":"8573215730","email":"bmoncey9@tiny.cc"},
      ]);
    });
};
