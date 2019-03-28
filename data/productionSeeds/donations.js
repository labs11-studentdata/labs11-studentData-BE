exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('donations').del()
        .then(function () {
            // Inserts seed entries
            return knex('social_worker_visits').insert([
            {"donationID":1,"user_ID":1, "student_id":1, "schoolID":1, "donation_total":85, "donation_date": "2017-11-24"},
            {"donationID":2,"user_ID":2, "student_id":2, "schoolID":2, "donation_total":80, "donation_date": "2017-11-25"},
            {"donationID":3,"user_ID":3, "student_id":3, "schoolID":3, "donation_total":75, "donation_date": "2017-11-26"},
            {"donationID":4,"user_ID":4, "student_id":4, "schoolID":4, "donation_total":70, "donation_date": "2017-11-27"},
            {"donationID":5,"user_ID":5, "student_id":5, "schoolID":5, "donation_total":65, "donation_date": "2017-11-28"},
            {"donationID":6,"user_ID":6, "student_id":6, "schoolID":6, "donation_total":60, "donation_date": "2017-11-29"}]);
        });
};
  