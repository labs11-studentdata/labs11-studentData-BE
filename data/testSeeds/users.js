
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('users').del()
      .then(function () {
        // Inserts seed entries
        return knex('users').insert([{"userID":1,"first_name":"Ingar","last_name":"Mohan","email":"imohan0@prnewswire.com","user_permissions":28},
        {"userID":2,"first_name":"Ferne","last_name":"Ferentz","email":"fferentz1@marketwatch.com","user_permissions":6},
        {"userID":3,"first_name":"Zelig","last_name":"Hasted","email":"zhasted2@geocities.jp","user_permissions":25},
        {"userID":4,"first_name":"Ariel","last_name":"Dongall","email":"adongall3@twitter.com","user_permissions":23},
        {"userID":5,"first_name":"Moise","last_name":"Morales","email":"mmorales4@indiatimes.com","user_permissions":12},
        {"userID":6,"first_name":"Rab","last_name":"Ketcher","email":"rketcher5@princeton.edu","user_permissions":26},
        {"userID":7,"first_name":"Chandra","last_name":"Getten","email":"cgetten6@google.com.hk","user_permissions":23},
        {"userID":8,"first_name":"Abbie","last_name":"Adhams","email":"aadhams7@dmoz.org","user_permissions":13},
        {"userID":9,"first_name":"Weylin","last_name":"Kee","email":"wkee8@twitter.com","user_permissions":13},
        {"userID":10,"first_name":"Ricca","last_name":"Edelheit","email":"redelheit9@skype.com","user_permissions":17},
        {"userID":11,"first_name":"Frederico","last_name":"Cancutt","email":"fcancutta@wikia.com","user_permissions":30},
        {"userID":12,"first_name":"Esme","last_name":"Kemwal","email":"ekemwalb@ucla.edu","user_permissions":17},
        {"userID":13,"first_name":"Dayna","last_name":"Hurdidge","email":"dhurdidgec@reddit.com","user_permissions":18},
        {"userID":14,"first_name":"Jenn","last_name":"Hastilow","email":"jhastilowd@wunderground.com","user_permissions":29},
        {"userID":15,"first_name":"Brigid","last_name":"Stallybrass","email":"bstallybrasse@tuttocitta.it","user_permissions":24},
        {"userID":16,"first_name":"Gordie","last_name":"Courtney","email":"gcourtneyf@wufoo.com","user_permissions":10},
        {"userID":17,"first_name":"Calvin","last_name":"Brownhall","email":"cbrownhallg@ted.com","user_permissions":18},
        {"userID":18,"first_name":"Sarajane","last_name":"Richarson","email":"sricharsonh@webs.com","user_permissions":23},
        {"userID":19,"first_name":"Pernell","last_name":"Itzhaiek","email":"pitzhaieki@google.co.jp","user_permissions":19},
        {"userID":20,"first_name":"Josephine","last_name":"Mingus","email":"jmingusj@omniture.com","user_permissions":10},
        {"userID":21,"first_name":"Belva","last_name":"Dank","email":"bdankk@unc.edu","user_permissions":20},
        {"userID":22,"first_name":"Kennie","last_name":"Foyle","email":"kfoylel@vkontakte.ru","user_permissions":17},
        {"userID":23,"first_name":"Francesco","last_name":"Suttell","email":"fsuttellm@opensource.org","user_permissions":28},
        {"userID":24,"first_name":"Chrisy","last_name":"Martyns","email":"cmartynsn@tripadvisor.com","user_permissions":4},
        {"userID":25,"first_name":"Simona","last_name":"Izkovitz","email":"sizkovitzo@i2i.jp","user_permissions":2},
        {"userID":26,"first_name":"Lib","last_name":"Reschke","email":"lreschkep@51.la","user_permissions":8},
        {"userID":27,"first_name":"Lou","last_name":"Lethbury","email":"llethburyq@sbwire.com","user_permissions":1},
        {"userID":28,"first_name":"Burke","last_name":"Edmand","email":"bedmandr@histats.com","user_permissions":19},
        {"userID":29,"first_name":"Dyan","last_name":"Cowope","email":"dcowopes@twitpic.com","user_permissions":9},
        {"userID":30,"first_name":"Hillie","last_name":"Greser","email":"hgresert@census.gov","user_permissions":3},
        {"userID":31,"first_name":"Venita","last_name":"Bosdet","email":"vbosdetu@smh.com.au","user_permissions":16},
        {"userID":32,"first_name":"Fred","last_name":"Uebel","email":"fuebelv@webeden.co.uk","user_permissions":3},
        {"userID":33,"first_name":"Hannis","last_name":"Corzor","email":"hcorzorw@xrea.com","user_permissions":11},
        {"userID":34,"first_name":"Christabel","last_name":"Pendreigh","email":"cpendreighx@spotify.com","user_permissions":23},
        {"userID":35,"first_name":"Doti","last_name":"Gear","email":"dgeary@imageshack.us","user_permissions":10},
        {"userID":36,"first_name":"Dalt","last_name":"Burdon","email":"dburdonz@odnoklassniki.ru","user_permissions":18},
        {"userID":37,"first_name":"Ernaline","last_name":"Aguirre","email":"eaguirre10@paypal.com","user_permissions":16},
        {"userID":38,"first_name":"Sterling","last_name":"Haggata","email":"shaggata11@google.co.jp","user_permissions":22},
        {"userID":39,"first_name":"Finlay","last_name":"Bryan","email":"fbryan12@statcounter.com","user_permissions":5},
        {"userID":40,"first_name":"Ignacius","last_name":"Parcell","email":"iparcell13@hatena.ne.jp","user_permissions":22},
        {"userID":41,"first_name":"Fee","last_name":"Minnette","email":"fminnette14@ted.com","user_permissions":22},
        {"userID":42,"first_name":"Kendricks","last_name":"Mattia","email":"kmattia15@miitbeian.gov.cn","user_permissions":7},
        {"userID":43,"first_name":"Lark","last_name":"Boustead","email":"lboustead16@wp.com","user_permissions":10},
        {"userID":44,"first_name":"Charo","last_name":"Pembery","email":"cpembery17@weebly.com","user_permissions":8},
        {"userID":45,"first_name":"Guntar","last_name":"Mead","email":"gmead18@aol.com","user_permissions":30},
        {"userID":46,"first_name":"Leland","last_name":"Pischof","email":"lpischof19@1und1.de","user_permissions":5},
        {"userID":47,"first_name":"Karine","last_name":"Whittam","email":"kwhittam1a@sciencedaily.com","user_permissions":22},
        {"userID":48,"first_name":"Clare","last_name":"Witz","email":"cwitz1b@ca.gov","user_permissions":5},
        {"userID":49,"first_name":"Orella","last_name":"Turneaux","email":"oturneaux1c@cocolog-nifty.com","user_permissions":9},
        {"userID":50,"first_name":"Berta","last_name":"Swindle","email":"bswindle1d@time.com","user_permissions":19},
        {"userID":51,"first_name":"Howard","last_name":"Loveard","email":"hloveard1e@unc.edu","user_permissions":27},
        {"userID":52,"first_name":"Farah","last_name":"Cruce","email":"fcruce1f@addtoany.com","user_permissions":4},
        {"userID":53,"first_name":"Kelly","last_name":"Filipson","email":"kfilipson1g@wsj.com","user_permissions":9},
        {"userID":54,"first_name":"Vaughn","last_name":"Donett","email":"vdonett1h@ezinearticles.com","user_permissions":8},
        {"userID":55,"first_name":"Aubrey","last_name":"Stancer","email":"astancer1i@bloglines.com","user_permissions":11},
        {"userID":56,"first_name":"Jessamine","last_name":"Pardie","email":"jpardie1j@gov.uk","user_permissions":7},
        {"userID":57,"first_name":"Mariann","last_name":"Godbold","email":"mgodbold1k@mashable.com","user_permissions":25},
        {"userID":58,"first_name":"Carolynn","last_name":"Bronger","email":"cbronger1l@go.com","user_permissions":26},
        {"userID":59,"first_name":"Kathryn","last_name":"Danher","email":"kdanher1m@ustream.tv","user_permissions":12},
        {"userID":60,"first_name":"Gerhardine","last_name":"Minerdo","email":"gminerdo1n@homestead.com","user_permissions":9},
        {"userID":61,"first_name":"Suzy","last_name":"Abramovicz","email":"sabramovicz1o@discuz.net","user_permissions":30},
        {"userID":62,"first_name":"Karoly","last_name":"Vose","email":"kvose1p@imdb.com","user_permissions":25},
        {"userID":63,"first_name":"Pryce","last_name":"Filyukov","email":"pfilyukov1q@ihg.com","user_permissions":2},
        {"userID":64,"first_name":"Caspar","last_name":"Ingry","email":"cingry1r@netscape.com","user_permissions":27},
        {"userID":65,"first_name":"Magda","last_name":"Aronstein","email":"maronstein1s@bloglovin.com","user_permissions":1},
        {"userID":66,"first_name":"Genvieve","last_name":"Chester","email":"gchester1t@latimes.com","user_permissions":7},
        {"userID":67,"first_name":"Dimitry","last_name":"Tadgell","email":"dtadgell1u@flickr.com","user_permissions":21},
        {"userID":68,"first_name":"Aeriel","last_name":"Goldson","email":"agoldson1v@behance.net","user_permissions":9},
        {"userID":69,"first_name":"Forrester","last_name":"Spencock","email":"fspencock1w@joomla.org","user_permissions":22},
        {"userID":70,"first_name":"Stuart","last_name":"Hansel","email":"shansel1x@economist.com","user_permissions":22},
        {"userID":71,"first_name":"Nada","last_name":"Lehr","email":"nlehr1y@house.gov","user_permissions":26},
        {"userID":72,"first_name":"Cori","last_name":"Kepling","email":"ckepling1z@imgur.com","user_permissions":29},
        {"userID":73,"first_name":"Grier","last_name":"Clendennen","email":"gclendennen20@ibm.com","user_permissions":13},
        {"userID":74,"first_name":"Carson","last_name":"Montacute","email":"cmontacute21@cargocollective.com","user_permissions":4},
        {"userID":75,"first_name":"Marlowe","last_name":"Asif","email":"masif22@cocolog-nifty.com","user_permissions":10},
        {"userID":76,"first_name":"Blair","last_name":"Gowman","email":"bgowman23@wp.com","user_permissions":4},
        {"userID":77,"first_name":"Genovera","last_name":"Bartleman","email":"gbartleman24@cdc.gov","user_permissions":18},
        {"userID":78,"first_name":"Koenraad","last_name":"Cressey","email":"kcressey25@dailymotion.com","user_permissions":17},
        {"userID":79,"first_name":"Paten","last_name":"Growy","email":"pgrowy26@technorati.com","user_permissions":2},
        {"userID":80,"first_name":"Franni","last_name":"Childerley","email":"fchilderley27@oakley.com","user_permissions":16},
        {"userID":81,"first_name":"Carlie","last_name":"Sworne","email":"csworne28@illinois.edu","user_permissions":19},
        {"userID":82,"first_name":"Bernadine","last_name":"Merfin","email":"bmerfin29@tumblr.com","user_permissions":21},
        {"userID":83,"first_name":"Johan","last_name":"Heasly","email":"jheasly2a@netlog.com","user_permissions":5},
        {"userID":84,"first_name":"Tess","last_name":"Topes","email":"ttopes2b@digg.com","user_permissions":7}]);
      });
  };
  