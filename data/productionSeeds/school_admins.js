
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
      {"adminID":23,"first_name":"Francesco","last_name":"Suttell","phone_number":"6214997678","email":"fsuttellm@opensource.org","schoolID":28},
      {"adminID":24,"first_name":"Chrisy","last_name":"Martyns","phone_number":"2754565426","email":"cmartynsn@tripadvisor.com","schoolID":4},
      {"adminID":25,"first_name":"Simona","last_name":"Izkovitz","phone_number":"9274582009","email":"sizkovitzo@i2i.jp","schoolID":2},
      {"adminID":26,"first_name":"Lib","last_name":"Reschke","phone_number":"8489097368","email":"lreschkep@51.la","schoolID":8},
      {"adminID":27,"first_name":"Lou","last_name":"Lethbury","phone_number":"2439296893","email":"llethburyq@sbwire.com","schoolID":1},
      {"adminID":28,"first_name":"Burke","last_name":"Edmand","phone_number":"8884052140","email":"bedmandr@histats.com","schoolID":19},
      {"adminID":29,"first_name":"Dyan","last_name":"Cowope","phone_number":"4649808632","email":"dcowopes@twitpic.com","schoolID":9},
      {"adminID":30,"first_name":"Hillie","last_name":"Greser","phone_number":"8151520681","email":"hgresert@census.gov","schoolID":3},
      {"adminID":31,"first_name":"Venita","last_name":"Bosdet","phone_number":"5035056491","email":"vbosdetu@smh.com.au","schoolID":16},
      {"adminID":32,"first_name":"Fred","last_name":"Uebel","phone_number":"8671199368","email":"fuebelv@webeden.co.uk","schoolID":3},
      {"adminID":33,"first_name":"Hannis","last_name":"Corzor","phone_number":"2967496548","email":"hcorzorw@xrea.com","schoolID":11},
      {"adminID":34,"first_name":"Christabel","last_name":"Pendreigh","phone_number":"6908553700","email":"cpendreighx@spotify.com","schoolID":23},
      {"adminID":35,"first_name":"Doti","last_name":"Gear","phone_number":"8582850338","email":"dgeary@imageshack.us","schoolID":10},
      {"adminID":36,"first_name":"Dalt","last_name":"Burdon","phone_number":"6191779024","email":"dburdonz@odnoklassniki.ru","schoolID":18},
      {"adminID":37,"first_name":"Ernaline","last_name":"Aguirre","phone_number":"6932704744","email":"eaguirre10@paypal.com","schoolID":16},
      {"adminID":38,"first_name":"Sterling","last_name":"Haggata","phone_number":"6912160012","email":"shaggata11@google.co.jp","schoolID":22},
      {"adminID":39,"first_name":"Finlay","last_name":"Bryan","phone_number":"4973419059","email":"fbryan12@statcounter.com","schoolID":5},
      {"adminID":40,"first_name":"Ignacius","last_name":"Parcell","phone_number":"4227758314","email":"iparcell13@hatena.ne.jp","schoolID":22},
      {"adminID":41,"first_name":"Fee","last_name":"Minnette","phone_number":"6254281143","email":"fminnette14@ted.com","schoolID":22},
      {"adminID":42,"first_name":"Kendricks","last_name":"Mattia","phone_number":"8618623030","email":"kmattia15@miitbeian.gov.cn","schoolID":7},
      {"adminID":43,"first_name":"Lark","last_name":"Boustead","phone_number":"7131072636","email":"lboustead16@wp.com","schoolID":10},
      {"adminID":44,"first_name":"Charo","last_name":"Pembery","phone_number":"3492712945","email":"cpembery17@weebly.com","schoolID":8},
      {"adminID":45,"first_name":"Guntar","last_name":"Mead","phone_number":"2543750602","email":"gmead18@aol.com","schoolID":30},
      {"adminID":46,"first_name":"Leland","last_name":"Pischof","phone_number":"5879309148","email":"lpischof19@1und1.de","schoolID":5},
      {"adminID":47,"first_name":"Karine","last_name":"Whittam","phone_number":"9321002783","email":"kwhittam1a@sciencedaily.com","schoolID":22},
      {"adminID":48,"first_name":"Clare","last_name":"Witz","phone_number":"8931901641","email":"cwitz1b@ca.gov","schoolID":5},
      {"adminID":49,"first_name":"Orella","last_name":"Turneaux","phone_number":"7825604244","email":"oturneaux1c@cocolog-nifty.com","schoolID":9},
      {"adminID":50,"first_name":"Berta","last_name":"Swindle","phone_number":"1419990566","email":"bswindle1d@time.com","schoolID":19},
      {"adminID":51,"first_name":"Howard","last_name":"Loveard","phone_number":"9334648032","email":"hloveard1e@unc.edu","schoolID":27},
      {"adminID":52,"first_name":"Farah","last_name":"Cruce","phone_number":"5478875470","email":"fcruce1f@addtoany.com","schoolID":4},
      {"adminID":53,"first_name":"Kelly","last_name":"Filipson","phone_number":"8177184171","email":"kfilipson1g@wsj.com","schoolID":9},
      {"adminID":54,"first_name":"Vaughn","last_name":"Donett","phone_number":"7755318920","email":"vdonett1h@ezinearticles.com","schoolID":8},
      {"adminID":55,"first_name":"Aubrey","last_name":"Stancer","phone_number":"6038642751","email":"astancer1i@bloglines.com","schoolID":11},
      {"adminID":56,"first_name":"Jessamine","last_name":"Pardie","phone_number":"7562287910","email":"jpardie1j@gov.uk","schoolID":7},
      {"adminID":57,"first_name":"Mariann","last_name":"Godbold","phone_number":"8822157229","email":"mgodbold1k@mashable.com","schoolID":25},
      {"adminID":58,"first_name":"Carolynn","last_name":"Bronger","phone_number":"8952120456","email":"cbronger1l@go.com","schoolID":26},
      {"adminID":59,"first_name":"Kathryn","last_name":"Danher","phone_number":"9084691063","email":"kdanher1m@ustream.tv","schoolID":12},
      {"adminID":60,"first_name":"Gerhardine","last_name":"Minerdo","phone_number":"8621705417","email":"gminerdo1n@homestead.com","schoolID":9},
      {"adminID":61,"first_name":"Suzy","last_name":"Abramovicz","phone_number":"5027885769","email":"sabramovicz1o@discuz.net","schoolID":30},
      {"adminID":62,"first_name":"Karoly","last_name":"Vose","phone_number":"4959090875","email":"kvose1p@imdb.com","schoolID":25},
      {"adminID":63,"first_name":"Pryce","last_name":"Filyukov","phone_number":"9688124878","email":"pfilyukov1q@ihg.com","schoolID":2},
      {"adminID":64,"first_name":"Caspar","last_name":"Ingry","phone_number":"3124956999","email":"cingry1r@netscape.com","schoolID":27},
      {"adminID":65,"first_name":"Magda","last_name":"Aronstein","phone_number":"1447540825","email":"maronstein1s@bloglovin.com","schoolID":1},
      {"adminID":66,"first_name":"Genvieve","last_name":"Chester","phone_number":"3832122904","email":"gchester1t@latimes.com","schoolID":7},
      {"adminID":67,"first_name":"Dimitry","last_name":"Tadgell","phone_number":"4447865874","email":"dtadgell1u@flickr.com","schoolID":21},
      {"adminID":68,"first_name":"Aeriel","last_name":"Goldson","phone_number":"5965687761","email":"agoldson1v@behance.net","schoolID":9},
      {"adminID":69,"first_name":"Forrester","last_name":"Spencock","phone_number":"9191674428","email":"fspencock1w@joomla.org","schoolID":22},
      {"adminID":70,"first_name":"Stuart","last_name":"Hansel","phone_number":"4969286964","email":"shansel1x@economist.com","schoolID":22},
      {"adminID":71,"first_name":"Nada","last_name":"Lehr","phone_number":"1575561694","email":"nlehr1y@house.gov","schoolID":26},
      {"adminID":72,"first_name":"Cori","last_name":"Kepling","phone_number":"1761915493","email":"ckepling1z@imgur.com","schoolID":29},
      {"adminID":73,"first_name":"Grier","last_name":"Clendennen","phone_number":"9806613260","email":"gclendennen20@ibm.com","schoolID":13},
      {"adminID":74,"first_name":"Carson","last_name":"Montacute","phone_number":"5942488002","email":"cmontacute21@cargocollective.com","schoolID":4},
      {"adminID":75,"first_name":"Marlowe","last_name":"Asif","phone_number":"7057795291","email":"masif22@cocolog-nifty.com","schoolID":10},
      {"adminID":76,"first_name":"Blair","last_name":"Gowman","phone_number":"1735411133","email":"bgowman23@wp.com","schoolID":4},
      {"adminID":77,"first_name":"Genovera","last_name":"Bartleman","phone_number":"8814942456","email":"gbartleman24@cdc.gov","schoolID":18},
      {"adminID":78,"first_name":"Koenraad","last_name":"Cressey","phone_number":"7272202433","email":"kcressey25@dailymotion.com","schoolID":17},
      {"adminID":79,"first_name":"Paten","last_name":"Growy","phone_number":"7056008976","email":"pgrowy26@technorati.com","schoolID":2},
      {"adminID":80,"first_name":"Franni","last_name":"Childerley","phone_number":"6582399164","email":"fchilderley27@oakley.com","schoolID":16},
      {"adminID":81,"first_name":"Carlie","last_name":"Sworne","phone_number":"8442278405","email":"csworne28@illinois.edu","schoolID":19},
      {"adminID":82,"first_name":"Bernadine","last_name":"Merfin","phone_number":"6971575283","email":"bmerfin29@tumblr.com","schoolID":21},
      {"adminID":83,"first_name":"Johan","last_name":"Heasly","phone_number":"9903061661","email":"jheasly2a@netlog.com","schoolID":5},
      {"adminID":84,"first_name":"Tess","last_name":"Topes","phone_number":"5131049472","email":"ttopes2b@digg.com","schoolID":7}]);
    });
};
