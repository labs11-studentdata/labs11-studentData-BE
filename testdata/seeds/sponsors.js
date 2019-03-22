
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sponsors').del()
    .then(function () {
      // Inserts seed entries
      return knex('sponsors').insert([{"sponsorID":1,"first_name":"Ron","last_name":"Snawden","phone_number":"4516442523","email":"rsnawden0@tmall.com"},
      {"sponsorID":2,"first_name":"Sidney","last_name":"Rosevear","phone_number":"6417713996","email":"srosevear1@nydailynews.com"},
      {"sponsorID":3,"first_name":"Coleen","last_name":"Woolpert","phone_number":"9122537925","email":"cwoolpert2@ebay.com"},
      {"sponsorID":4,"first_name":"Kalle","last_name":"Aherne","phone_number":"7103952149","email":"kaherne3@yahoo.com"},
      {"sponsorID":5,"first_name":"Berrie","last_name":"Vignaux","phone_number":"8455133815","email":"bvignaux4@smugmug.com"},
      {"sponsorID":6,"first_name":"Sarajane","last_name":"Dymoke","phone_number":"6234295745","email":"sdymoke5@qq.com"},
      {"sponsorID":7,"first_name":"Florance","last_name":"Batting","phone_number":"5736145853","email":"fbatting6@latimes.com"},
      {"sponsorID":8,"first_name":"Lenee","last_name":"Peret","phone_number":"4796401494","email":"lperet7@washington.edu"},
      {"sponsorID":9,"first_name":"Neville","last_name":"Powner","phone_number":"5786325723","email":"npowner8@slideshare.net"},
      {"sponsorID":10,"first_name":"Janelle","last_name":"Thurlbeck","phone_number":"3527834628","email":"jthurlbeck9@csmonitor.com"},
      ]);
    });
};
