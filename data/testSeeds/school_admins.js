
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('school_admins').del()
    .then(function () {
      // Inserts seed entries
      return knex('school_admins').insert([{"adminID":1,"first_name":"Ingar","last_name":"Mohan","phone_number":"8251170636","email":"imohan0@prnewswire.com","schoolID":28},
      {"adminID":2,"first_name":"Ferne","last_name":"Ferentz","phone_number":"2405894499","email":"fferentz1@marketwatch.com","schoolID":6},
      {"adminID":3,"first_name":"Zelig","last_name":"Hasted","phone_number":"4942533660","email":"zhasted2@geocities.jp","schoolID":25},
      {"adminID":4,"first_name":"Ariel","last_name":"Dongall","phone_number":"2071262191","email":"adongall3@twitter.com","schoolID":23},
      {"adminID":5,"first_name":"Moise","last_name":"Morales","phone_number":"5612402260","email":"mmorales4@indiatimes.com","schoolID":12},
      {"adminID":6,"first_name":"Rab","last_name":"Ketcher","phone_number":"7821462312","email":"rketcher5@princeton.edu","schoolID":26},
      {"adminID":7,"first_name":"Chandra","last_name":"Getten","phone_number":"9607611399","email":"cgetten6@google.com.hk","schoolID":23},
      {"adminID":8,"first_name":"Abbie","last_name":"Adhams","phone_number":"7899707099","email":"aadhams7@dmoz.org","schoolID":13},
      {"adminID":9,"first_name":"Weylin","last_name":"Kee","phone_number":"7529935936","email":"wkee8@twitter.com","schoolID":13},
      {"adminID":10,"first_name":"Ricca","last_name":"Edelheit","phone_number":"4597346772","email":"redelheit9@skype.com","schoolID":17},
      {"adminID":11,"first_name":"Frederico","last_name":"Cancutt","phone_number":"9425040727","email":"fcancutta@wikia.com","schoolID":30},
      {"adminID":12,"first_name":"Esme","last_name":"Kemwal","phone_number":"5655918027","email":"ekemwalb@ucla.edu","schoolID":17},
      {"adminID":13,"first_name":"Dayna","last_name":"Hurdidge","phone_number":"5806443133","email":"dhurdidgec@reddit.com","schoolID":18},
      {"adminID":14,"first_name":"Jenn","last_name":"Hastilow","phone_number":"6746944760","email":"jhastilowd@wunderground.com","schoolID":29},
      {"adminID":15,"first_name":"Brigid","last_name":"Stallybrass","phone_number":"1012860288","email":"bstallybrasse@tuttocitta.it","schoolID":24},
      {"adminID":16,"first_name":"Gordie","last_name":"Courtney","phone_number":"1003629373","email":"gcourtneyf@wufoo.com","schoolID":10},
      {"adminID":17,"first_name":"Calvin","last_name":"Brownhall","phone_number":"5711618063","email":"cbrownhallg@ted.com","schoolID":18},
      {"adminID":18,"first_name":"Sarajane","last_name":"Richarson","phone_number":"4931071658","email":"sricharsonh@webs.com","schoolID":23},
      {"adminID":19,"first_name":"Pernell","last_name":"Itzhaiek","phone_number":"8034584210","email":"pitzhaieki@google.co.jp","schoolID":19},
      {"adminID":20,"first_name":"Josephine","last_name":"Mingus","phone_number":"2726131537","email":"jmingusj@omniture.com","schoolID":10},
      {"adminID":21,"first_name":"Belva","last_name":"Dank","phone_number":"9354676965","email":"bdankk@unc.edu","schoolID":20},
      {"adminID":22,"first_name":"Kennie","last_name":"Foyle","phone_number":"1843929865","email":"kfoylel@vkontakte.ru","schoolID":17},
      {"adminID":23,"first_name":"Francesco","last_name":"Suttell","phone_number":"6214997678","email":"fsuttellm@opensource.org","schoolID":28},]);
    });
};
