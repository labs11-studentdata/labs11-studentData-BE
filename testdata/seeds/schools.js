
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('schools').del()
    .then(function () {
      // Inserts seed entries
      return knex('schools').insert([{"schoolID":1,"school_name":"Appalachian Mountainmint","location":"Aco"},
      {"schoolID":2,"school_name":"Varital","location":"Iturama"},
      {"schoolID":3,"school_name":"Maui Buttercup","location":"Modot"},
      {"schoolID":4,"school_name":"Manzanilla Trepador","location":"Ängelholm"},
      {"schoolID":5,"school_name":"Crevajosa","location":"Pontian"},
      {"schoolID":6,"school_name":"Torrey's Sedge","location":"Pylaía"},
      {"schoolID":7,"school_name":"Cyrtandra","location":"Tibiri"},
      ]);
    });
};
