exports.seed = function(knex, Promise) {
    return knex('students')
      .del() // delete existing students
      .then(function() {
        return knex('students').insert([
          { student_id: 1,
            gradeID: 3,
            first_name: 'John',
            last_name: 'Doe',
            age: 8,
            schoolID: 4,
            contact_first_name: 'Jane',
            contact_last_name: 'Doe',
          }, 
        ]);
      });
  };