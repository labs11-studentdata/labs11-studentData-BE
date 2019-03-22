
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('grades').del()
    .then(function () {
      // Inserts seed entries
      return knex('grades').insert([{"gradeID":1,"schoolID":1},
      {"gradeID":2,"schoolID":1},
      {"gradeID":3,"schoolID":1},
      {"gradeID":4,"schoolID":1},
      {"gradeID":5,"schoolID":1},
      {"gradeID":6,"schoolID":1},
      {"gradeID":7,"schoolID":1},
      {"gradeID":8,"schoolID":1},
      {"gradeID":9,"schoolID":1},
      {"gradeID":10,"schoolID":1},
      {"gradeID":11,"schoolID":1},
      {"gradeID":12,"schoolID":1},
      {"gradeID":13,"schoolID":2},
      {"gradeID":14,"schoolID":2},
      {"gradeID":15,"schoolID":2},
      {"gradeID":16,"schoolID":2},
      {"gradeID":17,"schoolID":2},
      {"gradeID":18,"schoolID":2},
      {"gradeID":19,"schoolID":2},
      {"gradeID":20,"schoolID":2},
      {"gradeID":21,"schoolID":2},
      {"gradeID":22,"schoolID":2},
      {"gradeID":23,"schoolID":2},
      {"gradeID":24,"schoolID":2},
      {"gradeID":25,"schoolID":3},
      {"gradeID":26,"schoolID":3},
      {"gradeID":27,"schoolID":3},
      {"gradeID":28,"schoolID":3},
      {"gradeID":29,"schoolID":3},
      {"gradeID":30,"schoolID":3},
      {"gradeID":31,"schoolID":3},
      {"gradeID":32,"schoolID":3},
      {"gradeID":33,"schoolID":3},
      {"gradeID":34,"schoolID":3},
      {"gradeID":35,"schoolID":3},
      {"gradeID":36,"schoolID":3},
      ]);
    });
};
