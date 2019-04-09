
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('donations').del()
    .then(function () {
      // Inserts seed entries
      return knex('donations').insert([
        {"userID":1, "studentID":1, "schoolID":1, "donation_total":85,},
        {"userID":2, "studentID":2, "schoolID":2, "donation_total":80,},
        {"userID":1, "studentID":3, "schoolID":3, "donation_total":75,},
        {"userID":2, "studentID":4, "schoolID":4, "donation_total":70,},
        {"userID":1, "studentID":5, "schoolID":5, "donation_total":65,},
        {"userID":2, "studentID":6, "schoolID":6, "donation_total":60,}
      ]);
    });
};
