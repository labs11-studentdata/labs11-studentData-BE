
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('social_worker_visits').del()
    .then(function () {
      // Inserts seed entries
      return knex('social_worker_visits').insert([{"visitID":1,"schoolID":3,"socialWorkerID":8,"visit_date":"2017-05-03","notes":"Business-focused fresh-thinking implementation"},
      {"visitID":2,"schoolID":2,"socialWorkerID":3,"visit_date":"2017-05-25","notes":"Sharable background toolset"},
      {"visitID":3,"schoolID":2,"socialWorkerID":2,"visit_date":"2017-08-19","notes":"Ergonomic upward-trending installation"},
      {"visitID":4,"schoolID":3,"socialWorkerID":6,"visit_date":"2018-01-14","notes":"Up-sized needs-based initiative"},
      {"visitID":5,"schoolID":3,"socialWorkerID":6,"visit_date":"2017-10-21","notes":"Customer-focused foreground implementation"},
      {"visitID":6,"schoolID":2,"socialWorkerID":10,"visit_date":"2017-09-21","notes":"Innovative client-server framework"},
      {"visitID":7,"schoolID":3,"socialWorkerID":1,"visit_date":"2017-05-30","notes":"Multi-lateral global info-mediaries"},
      {"visitID":8,"schoolID":2,"socialWorkerID":3,"visit_date":"2017-09-02","notes":"Progressive grid-enabled success"},
      {"visitID":9,"schoolID":2,"socialWorkerID":5,"visit_date":"2018-10-08","notes":"Multi-layered national parallelism"},
      {"visitID":10,"schoolID":3,"socialWorkerID":2,"visit_date":"2019-01-27","notes":"Operative leading edge application"},
      {"visitID":11,"schoolID":3,"socialWorkerID":6,"visit_date":"2018-09-13","notes":"Horizontal well-modulated time-frame"},
      {"visitID":12,"schoolID":2,"socialWorkerID":9,"visit_date":"2018-07-16","notes":"Balanced logistical website"},
      {"visitID":13,"schoolID":3,"socialWorkerID":8,"visit_date":"2017-05-06","notes":"Pre-emptive optimizing system engine"},
      {"visitID":14,"schoolID":2,"socialWorkerID":6,"visit_date":"2017-05-27","notes":"Cloned regional hierarchy"},
      {"visitID":15,"schoolID":1,"socialWorkerID":1,"visit_date":"2018-09-24","notes":"Public-key mobile focus group"},
      {"visitID":16,"schoolID":2,"socialWorkerID":5,"visit_date":"2017-12-14","notes":"Upgradable exuding support"},
      {"visitID":17,"schoolID":2,"socialWorkerID":5,"visit_date":"2017-07-27","notes":"Integrated national matrix"},
      {"visitID":18,"schoolID":1,"socialWorkerID":7,"visit_date":"2018-05-05","notes":"Distributed full-range methodology"},
      {"visitID":19,"schoolID":2,"socialWorkerID":6,"visit_date":"2017-06-15","notes":"Total well-modulated core"},
      {"visitID":20,"schoolID":3,"socialWorkerID":10,"visit_date":"2019-03-05","notes":"Proactive human-resource focus group"}]);
    });
};
