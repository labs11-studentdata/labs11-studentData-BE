
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('school_admins').del()
    .then(function () {
      // Inserts seed entries
      return knex('school_admins').insert([{"adminID":1,"first_name":"Edna","last_name":"Sommerville","phone_number":"9606689643","email":"esommerville0@rediff.com","schoolID":2},
      {"adminID":2,"first_name":"Christoph","last_name":"Grishaev","phone_number":"4718661836","email":"cgrishaev1@aol.com","schoolID":1},
      {"adminID":3,"first_name":"Pammi","last_name":"Mattschas","phone_number":"4367834039","email":"pmattschas2@issuu.com","schoolID":3},
      {"adminID":4,"first_name":"Gayel","last_name":"Gilling","phone_number":"1702237163","email":"ggilling3@paypal.com","schoolID":2},
      {"adminID":5,"first_name":"Kiah","last_name":"Dalman","phone_number":"6556819636","email":"kdalman4@livejournal.com","schoolID":3},
      {"adminID":6,"first_name":"Jehanna","last_name":"Stalley","phone_number":"4194449705","email":"jstalley5@addthis.com","schoolID":2},
      {"adminID":7,"first_name":"Philip","last_name":"Layne","phone_number":"9703414184","email":"playne6@youtu.be","schoolID":1},
      {"adminID":8,"first_name":"Reagen","last_name":"Gowrich","phone_number":"5289743689","email":"rgowrich7@wikipedia.org","schoolID":2},
      {"adminID":9,"first_name":"Hendrik","last_name":"Wray","phone_number":"8931822686","email":"hwray8@berkeley.edu","schoolID":2},
      {"adminID":10,"first_name":"Finn","last_name":"Snasdell","phone_number":"1013346682","email":"fsnasdell9@imageshack.us","schoolID":1}]);
    });
};
