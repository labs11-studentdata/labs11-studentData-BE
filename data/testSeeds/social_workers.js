
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('social_workers').del()
    .then(function () {
      // Inserts seed entries
      return knex('social_workers').insert([{"user_ID":1,"first_name":"Ilsa","last_name":"Mumbeson","phone_number":"1049753253","email":"imumbeson0@nationalgeographic.com"},
      {"user_ID":2,"first_name":"Brendan","last_name":"Toope","phone_number":"5041521242","email":"btoope1@imageshack.us"},
      {"user_ID":3,"first_name":"Kordula","last_name":"Cloake","phone_number":"5355187775","email":"kcloake2@npr.org"},
      {"user_ID":4,"first_name":"Deane","last_name":"Cantua","phone_number":"6642073347","email":"dcantua3@cnet.com"},
      {"user_ID":5,"first_name":"Agosto","last_name":"Klauer","phone_number":"4496417979","email":"aklauer4@samsung.com"},
      {"user_ID":6,"first_name":"Arel","last_name":"Whaites","phone_number":"8983236930","email":"awhaites5@goodreads.com"},
      {"user_ID":7,"first_name":"Billye","last_name":"Risebarer","phone_number":"7774992936","email":"brisebarer6@tmall.com"},
      {"user_ID":8,"first_name":"Emmalee","last_name":"Pingstone","phone_number":"7359768638","email":"epingstone7@squidoo.com"},
      {"user_ID":9,"first_name":"Andeee","last_name":"Wegenen","phone_number":"4845985412","email":"awegenen8@salon.com"},
      {"user_ID":10,"first_name":"Heriberto","last_name":"Gisbey","phone_number":"7353763120","email":"hgisbey9@plala.or.jp"},
      {"user_ID":11,"first_name":"Laurens","last_name":"Ragat","phone_number":"1282406143","email":"lragata@people.com.cn"},
      {"user_ID":12,"first_name":"Kinna","last_name":"Natt","phone_number":"4903180990","email":"knattb@feedburner.com"},
      {"user_ID":13,"first_name":"Stearne","last_name":"Cameron","phone_number":"9044485791","email":"scameronc@google.co.jp"},
      {"user_ID":14,"first_name":"Midge","last_name":"Sturr","phone_number":"4718050567","email":"msturrd@sbwire.com"},
      {"user_ID":15,"first_name":"Inesita","last_name":"Yankishin","phone_number":"9237130285","email":"iyankishine@cbc.ca"},
      {"user_ID":16,"first_name":"Kerri","last_name":"Jest","phone_number":"4945301627","email":"kjestf@europa.eu"},
      {"user_ID":17,"first_name":"Emili","last_name":"Vreede","phone_number":"2323830282","email":"evreedeg@ifeng.com"},
      {"user_ID":18,"first_name":"Ardella","last_name":"Fidock","phone_number":"7713984313","email":"afidockh@blogs.com"},
      {"user_ID":19,"first_name":"Emlen","last_name":"Dewerson","phone_number":"2107974282","email":"edewersoni@umn.edu"},
      {"user_ID":20,"first_name":"Avictor","last_name":"Cancellario","phone_number":"9909057779","email":"acancellarioj@indiatimes.com"},
      {"user_ID":21,"first_name":"Claiborn","last_name":"McAndrew","phone_number":"2454177202","email":"cmcandrewk@lulu.com"},
      {"user_ID":22,"first_name":"Rebbecca","last_name":"Turpey","phone_number":"8471764566","email":"rturpeyl@reuters.com"},
      {"user_ID":23,"first_name":"Kirby","last_name":"Phillimore","phone_number":"4543639447","email":"kphillimorem@washington.edu"},
      {"user_ID":24,"first_name":"Ambrose","last_name":"Cullimore","phone_number":"3844149073","email":"acullimoren@utexas.edu"},
      {"user_ID":25,"first_name":"Noble","last_name":"Delany","phone_number":"7127181625","email":"ndelanyo@marriott.com"},
      {"user_ID":26,"first_name":"Mariana","last_name":"Kolinsky","phone_number":"3329817415","email":"mkolinskyp@unicef.org"},
      {"user_ID":27,"first_name":"Norman","last_name":"Fifoot","phone_number":"7787004416","email":"nfifootq@telegraph.co.uk"},
      {"user_ID":28,"first_name":"Maegan","last_name":"Epton","phone_number":"2059446465","email":"meptonr@miibeian.gov.cn"},]);
    });
};
