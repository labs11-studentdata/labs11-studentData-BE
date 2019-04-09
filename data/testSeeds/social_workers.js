
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('social_workers').del()
    .then(function () {
      // Inserts seed entries
      return knex('social_workers').insert([{"userID":1,"first_name":"Ilsa","last_name":"Mumbeson","phone_number":"1049753253","email":"imumbeson0@nationalgeographic.com"},
      {"userID":2,"first_name":"Brendan","last_name":"Toope","phone_number":"5041521242","email":"btoope1@imageshack.us"},
      {"userID":3,"first_name":"Kordula","last_name":"Cloake","phone_number":"5355187775","email":"kcloake2@npr.org"},
      {"userID":4,"first_name":"Deane","last_name":"Cantua","phone_number":"6642073347","email":"dcantua3@cnet.com"},
      {"userID":5,"first_name":"Agosto","last_name":"Klauer","phone_number":"4496417979","email":"aklauer4@samsung.com"},
      {"userID":6,"first_name":"Arel","last_name":"Whaites","phone_number":"8983236930","email":"awhaites5@goodreads.com"},
      {"userID":7,"first_name":"Billye","last_name":"Risebarer","phone_number":"7774992936","email":"brisebarer6@tmall.com"},
      {"userID":8,"first_name":"Emmalee","last_name":"Pingstone","phone_number":"7359768638","email":"epingstone7@squidoo.com"},
      {"userID":9,"first_name":"Andeee","last_name":"Wegenen","phone_number":"4845985412","email":"awegenen8@salon.com"},
      {"userID":10,"first_name":"Heriberto","last_name":"Gisbey","phone_number":"7353763120","email":"hgisbey9@plala.or.jp"},
      {"userID":11,"first_name":"Laurens","last_name":"Ragat","phone_number":"1282406143","email":"lragata@people.com.cn"},
      {"userID":12,"first_name":"Kinna","last_name":"Natt","phone_number":"4903180990","email":"knattb@feedburner.com"},
      {"userID":13,"first_name":"Stearne","last_name":"Cameron","phone_number":"9044485791","email":"scameronc@google.co.jp"},
      {"userID":14,"first_name":"Midge","last_name":"Sturr","phone_number":"4718050567","email":"msturrd@sbwire.com"},
      {"userID":15,"first_name":"Inesita","last_name":"Yankishin","phone_number":"9237130285","email":"iyankishine@cbc.ca"},
      {"userID":16,"first_name":"Kerri","last_name":"Jest","phone_number":"4945301627","email":"kjestf@europa.eu"},
      {"userID":17,"first_name":"Emili","last_name":"Vreede","phone_number":"2323830282","email":"evreedeg@ifeng.com"},
      {"userID":18,"first_name":"Ardella","last_name":"Fidock","phone_number":"7713984313","email":"afidockh@blogs.com"},
      {"userID":19,"first_name":"Emlen","last_name":"Dewerson","phone_number":"2107974282","email":"edewersoni@umn.edu"},
      {"userID":20,"first_name":"Avictor","last_name":"Cancellario","phone_number":"9909057779","email":"acancellarioj@indiatimes.com"},
      {"userID":21,"first_name":"Claiborn","last_name":"McAndrew","phone_number":"2454177202","email":"cmcandrewk@lulu.com"},
      {"userID":22,"first_name":"Rebbecca","last_name":"Turpey","phone_number":"8471764566","email":"rturpeyl@reuters.com"},
      {"userID":23,"first_name":"Kirby","last_name":"Phillimore","phone_number":"4543639447","email":"kphillimorem@washington.edu"},
      {"userID":24,"first_name":"Ambrose","last_name":"Cullimore","phone_number":"3844149073","email":"acullimoren@utexas.edu"},
      {"userID":25,"first_name":"Noble","last_name":"Delany","phone_number":"7127181625","email":"ndelanyo@marriott.com"},
      {"userID":26,"first_name":"Mariana","last_name":"Kolinsky","phone_number":"3329817415","email":"mkolinskyp@unicef.org"},
      {"userID":27,"first_name":"Norman","last_name":"Fifoot","phone_number":"7787004416","email":"nfifootq@telegraph.co.uk"},
      {"userID":28,"first_name":"Maegan","last_name":"Epton","phone_number":"2059446465","email":"meptonr@miibeian.gov.cn"},]);
    });
};
