
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sponsors').del()
    .then(function () {
      // Inserts seed entries
      return knex('sponsors').insert([{"sponsorID":1,"first_name":"Tailor","last_name":"Lygoe","phone_number":"5793325150","email":"tlygoe0@xrea.com"},
      {"sponsorID":2,"first_name":"Fernanda","last_name":"Brasse","phone_number":"2587242352","email":"fbrasse1@cyberchimps.com"},
      {"sponsorID":3,"first_name":"Jean","last_name":"Seligson","phone_number":"3746347563","email":"jseligson2@a8.net"},
      {"sponsorID":4,"first_name":"Kerry","last_name":"Chapier","phone_number":"7877600780","email":"kchapier3@facebook.com"},
      {"sponsorID":5,"first_name":"Noby","last_name":"Jacobssen","phone_number":"7378065576","email":"njacobssen4@ucsd.edu"},
      {"sponsorID":6,"first_name":"Cybill","last_name":"Turley","phone_number":"5484458381","email":"cturley5@cnbc.com"},
      {"sponsorID":7,"first_name":"Zollie","last_name":"Brolan","phone_number":"6547197602","email":"zbrolan6@freewebs.com"},
      {"sponsorID":8,"first_name":"Seumas","last_name":"Simper","phone_number":"3825945399","email":"ssimper7@studiopress.com"},
      {"sponsorID":9,"first_name":"Eirena","last_name":"Braun","phone_number":"6143586677","email":"ebraun8@timesonline.co.uk"},
      {"sponsorID":10,"first_name":"Marge","last_name":"Mosey","phone_number":"9281008303","email":"mmosey9@mozilla.com"},
      {"sponsorID":11,"first_name":"Kristo","last_name":"Bruneton","phone_number":"8264084200","email":"kbrunetona@mozilla.com"},
      {"sponsorID":12,"first_name":"Pooh","last_name":"Agar","phone_number":"4994217080","email":"pagarb@tamu.edu"},
      {"sponsorID":13,"first_name":"Mattias","last_name":"Alexsandrovich","phone_number":"9054078294","email":"malexsandrovichc@reuters.com"},
      {"sponsorID":14,"first_name":"Jordanna","last_name":"Hebbron","phone_number":"2382878414","email":"jhebbrond@netvibes.com"},
      {"sponsorID":15,"first_name":"Florinda","last_name":"Starten","phone_number":"7925944831","email":"fstartene@ehow.com"},
      {"sponsorID":16,"first_name":"Constance","last_name":"Shrawley","phone_number":"8131257417","email":"cshrawleyf@google.it"},
      {"sponsorID":17,"first_name":"Ted","last_name":"Bellringer","phone_number":"9353668619","email":"tbellringerg@bluehost.com"},
      {"sponsorID":18,"first_name":"Bancroft","last_name":"Kelner","phone_number":"1075358815","email":"bkelnerh@scribd.com"},
      {"sponsorID":19,"first_name":"Melany","last_name":"Hacaud","phone_number":"4957422503","email":"mhacaudi@redcross.org"},
      {"sponsorID":20,"first_name":"Lefty","last_name":"Fritche","phone_number":"7499759637","email":"lfritchej@senate.gov"},
      {"sponsorID":21,"first_name":"Nessy","last_name":"Tyt","phone_number":"4665420355","email":"ntytk@smh.com.au"},
      {"sponsorID":22,"first_name":"Alvinia","last_name":"Ravenhills","phone_number":"3657210981","email":"aravenhillsl@quantcast.com"},
      {"sponsorID":23,"first_name":"Ferdinande","last_name":"Cudbertson","phone_number":"7545140053","email":"fcudbertsonm@histats.com"},
      {"sponsorID":24,"first_name":"Hilary","last_name":"Pinkerton","phone_number":"5551782476","email":"hpinkertonn@wufoo.com"},
      {"sponsorID":25,"first_name":"Fredia","last_name":"Goodboddy","phone_number":"1732583847","email":"fgoodboddyo@infoseek.co.jp"},
      {"sponsorID":26,"first_name":"Teddy","last_name":"Ethington","phone_number":"2035093875","email":"tethingtonp@elpais.com"},
      {"sponsorID":27,"first_name":"Pammi","last_name":"Rosenbush","phone_number":"9452120980","email":"prosenbushq@google.fr"},]);
    });
};
