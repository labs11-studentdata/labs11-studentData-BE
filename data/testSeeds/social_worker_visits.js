
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('social_worker_visits').del()
    .then(function () {
      // Inserts seed entries
      return knex('social_worker_visits').insert([{"visitID":1,"schoolID":18,"userID":343,"visit_date":"2017-07-31","notes":"Function-based attitude-oriented system engine"},
      {"visitID":2,"schoolID":5,"userID":416,"visit_date":"2018-03-20","notes":"Cloned real-time hierarchy"},
      {"visitID":3,"schoolID":4,"userID":498,"visit_date":"2018-08-18","notes":"Diverse leading edge extranet"},
      {"visitID":4,"schoolID":23,"userID":191,"visit_date":"2017-10-31","notes":"Realigned hybrid definition"},
      {"visitID":5,"schoolID":26,"userID":355,"visit_date":"2017-11-29","notes":"Synergistic multimedia matrices"},
      {"visitID":6,"schoolID":3,"userID":327,"visit_date":"2017-07-15","notes":"Multi-lateral regional help-desk"},
      {"visitID":7,"schoolID":10,"userID":1,"visit_date":"2019-01-29","notes":"Operative next generation middleware"},
      {"visitID":8,"schoolID":13,"userID":227,"visit_date":"2018-07-13","notes":"Profit-focused full-range circuit"},
      {"visitID":9,"schoolID":24,"userID":286,"visit_date":"2017-11-08","notes":"Triple-buffered dedicated policy"},
      {"visitID":10,"schoolID":14,"userID":276,"visit_date":"2017-10-08","notes":"Team-oriented dynamic architecture"},
      {"visitID":11,"schoolID":8,"userID":460,"visit_date":"2017-06-08","notes":"Down-sized executive info-mediaries"},
      {"visitID":12,"schoolID":11,"userID":275,"visit_date":"2018-08-18","notes":"Fundamental executive secured line"},
      {"visitID":13,"schoolID":10,"userID":17,"visit_date":"2018-01-04","notes":"Fundamental explicit definition"},
      {"visitID":14,"schoolID":4,"userID":480,"visit_date":"2018-07-05","notes":"Advanced neutral infrastructure"},
      {"visitID":15,"schoolID":1,"userID":390,"visit_date":"2018-08-07","notes":"Profit-focused bifurcated initiative"},
      {"visitID":16,"schoolID":16,"userID":289,"visit_date":"2017-04-19","notes":"User-friendly asynchronous alliance"},
      {"visitID":17,"schoolID":29,"userID":113,"visit_date":"2017-09-05","notes":"Innovative web-enabled focus group"},
      {"visitID":18,"schoolID":20,"userID":48,"visit_date":"2017-07-11","notes":"Total hybrid intranet"},
      {"visitID":19,"schoolID":2,"userID":334,"visit_date":"2018-12-02","notes":"Mandatory zero defect synergy"},
      {"visitID":20,"schoolID":14,"userID":396,"visit_date":"2017-05-08","notes":"Organic real-time customer loyalty"},
      {"visitID":21,"schoolID":16,"userID":173,"visit_date":"2018-09-01","notes":"Self-enabling intermediate intranet"},
      {"visitID":22,"schoolID":22,"userID":11,"visit_date":"2019-02-21","notes":"Operative tertiary methodology"},
      {"visitID":23,"schoolID":20,"userID":120,"visit_date":"2019-03-12","notes":"Balanced multi-tasking circuit"},
      {"visitID":24,"schoolID":9,"userID":459,"visit_date":"2019-03-01","notes":"Synergistic zero administration synergy"},
      {"visitID":25,"schoolID":11,"userID":432,"visit_date":"2017-04-20","notes":"Down-sized zero defect solution"},
      {"visitID":26,"schoolID":10,"userID":63,"visit_date":"2017-11-10","notes":"Advanced demand-driven algorithm"},
      {"visitID":27,"schoolID":29,"userID":15,"visit_date":"2018-10-17","notes":"Universal actuating methodology"},]);
    });
};
