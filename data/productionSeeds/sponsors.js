
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
      {"sponsorID":27,"first_name":"Pammi","last_name":"Rosenbush","phone_number":"9452120980","email":"prosenbushq@google.fr"},
      {"sponsorID":28,"first_name":"Otha","last_name":"Jennens","phone_number":"1173638303","email":"ojennensr@example.com"},
      {"sponsorID":29,"first_name":"Gertrud","last_name":"Roze","phone_number":"2572776094","email":"grozes@shinystat.com"},
      {"sponsorID":30,"first_name":"Brucie","last_name":"Aiston","phone_number":"3941963184","email":"baistont@google.pl"},
      {"sponsorID":31,"first_name":"Kassey","last_name":"Beswetherick","phone_number":"8687874657","email":"kbeswethericku@flickr.com"},
      {"sponsorID":32,"first_name":"Maure","last_name":"Farnon","phone_number":"7706515201","email":"mfarnonv@washingtonpost.com"},
      {"sponsorID":33,"first_name":"Lacey","last_name":"MacDonell","phone_number":"4968554816","email":"lmacdonellw@multiply.com"},
      {"sponsorID":34,"first_name":"Winnifred","last_name":"Clewarth","phone_number":"3098001171","email":"wclewarthx@wordpress.org"},
      {"sponsorID":35,"first_name":"Jeralee","last_name":"Tall","phone_number":"3104814651","email":"jtally@cbc.ca"},
      {"sponsorID":36,"first_name":"Randene","last_name":"Chastanet","phone_number":"2225430023","email":"rchastanetz@eepurl.com"},
      {"sponsorID":37,"first_name":"Clemente","last_name":"Stanlake","phone_number":"4495743150","email":"cstanlake10@reddit.com"},
      {"sponsorID":38,"first_name":"Gram","last_name":"Phipson","phone_number":"1711976697","email":"gphipson11@newyorker.com"},
      {"sponsorID":39,"first_name":"Jacky","last_name":"Flott","phone_number":"3112670057","email":"jflott12@mapquest.com"},
      {"sponsorID":40,"first_name":"Rochester","last_name":"Maloney","phone_number":"4878229161","email":"rmaloney13@blinklist.com"},
      {"sponsorID":41,"first_name":"Andrus","last_name":"Frugier","phone_number":"9518852676","email":"afrugier14@elpais.com"},
      {"sponsorID":42,"first_name":"Ludvig","last_name":"Pell","phone_number":"6246273570","email":"lpell15@upenn.edu"},
      {"sponsorID":43,"first_name":"Clarissa","last_name":"O'Hagerty","phone_number":"9488110035","email":"cohagerty16@xing.com"},
      {"sponsorID":44,"first_name":"Zachariah","last_name":"Heningham","phone_number":"6119946477","email":"zheningham17@mysql.com"},
      {"sponsorID":45,"first_name":"Bronnie","last_name":"Lidgertwood","phone_number":"1441886986","email":"blidgertwood18@ameblo.jp"},
      {"sponsorID":46,"first_name":"Petronilla","last_name":"Spence","phone_number":"9966724262","email":"pspence19@privacy.gov.au"},
      {"sponsorID":47,"first_name":"North","last_name":"Yarnton","phone_number":"3012547988","email":"nyarnton1a@google.fr"},
      {"sponsorID":48,"first_name":"Libbie","last_name":"De la croix","phone_number":"5033072328","email":"ldelacroix1b@friendfeed.com"},
      {"sponsorID":49,"first_name":"Alli","last_name":"Uzelli","phone_number":"6857892085","email":"auzelli1c@parallels.com"},
      {"sponsorID":50,"first_name":"Hallie","last_name":"Matessian","phone_number":"2817975112","email":"hmatessian1d@yolasite.com"},
      {"sponsorID":51,"first_name":"Roosevelt","last_name":"Gahagan","phone_number":"5578722383","email":"rgahagan1e@about.me"},
      {"sponsorID":52,"first_name":"Howie","last_name":"Northridge","phone_number":"9449688750","email":"hnorthridge1f@usatoday.com"},
      {"sponsorID":53,"first_name":"Mayer","last_name":"Crome","phone_number":"9508028528","email":"mcrome1g@baidu.com"},
      {"sponsorID":54,"first_name":"Zebulon","last_name":"Klimowski","phone_number":"4386358618","email":"zklimowski1h@jimdo.com"},
      {"sponsorID":55,"first_name":"Christine","last_name":"MacGovern","phone_number":"5951221258","email":"cmacgovern1i@usatoday.com"},
      {"sponsorID":56,"first_name":"Priscilla","last_name":"Dykes","phone_number":"5668978291","email":"pdykes1j@netvibes.com"},
      {"sponsorID":57,"first_name":"Cherilynn","last_name":"Suter","phone_number":"3902976401","email":"csuter1k@biglobe.ne.jp"},
      {"sponsorID":58,"first_name":"Lou","last_name":"Jozefiak","phone_number":"8159947585","email":"ljozefiak1l@illinois.edu"},
      {"sponsorID":59,"first_name":"Desmund","last_name":"Penright","phone_number":"3768962931","email":"dpenright1m@dailymotion.com"},
      {"sponsorID":60,"first_name":"Tommie","last_name":"Crewe","phone_number":"8205439114","email":"tcrewe1n@vimeo.com"},
      {"sponsorID":61,"first_name":"Marketa","last_name":"Jeafferson","phone_number":"4248042609","email":"mjeafferson1o@telegraph.co.uk"},
      {"sponsorID":62,"first_name":"Cindi","last_name":"Barby","phone_number":"9435026439","email":"cbarby1p@google.co.jp"},
      {"sponsorID":63,"first_name":"Cecilius","last_name":"Aylwin","phone_number":"4228244514","email":"caylwin1q@miitbeian.gov.cn"},
      {"sponsorID":64,"first_name":"Karyn","last_name":"Fawloe","phone_number":"8692104835","email":"kfawloe1r@sohu.com"}]);
    });
};
