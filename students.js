
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([{"student_id":1,"gradeID":8,"first_name":"Gareth","last_name":"Parnell","age":14,"schoolID":14,"has_insurance":false,"has_birthcert":false,"dues":1136.35,"special_needs":true,"contact_first_name":"Edee","contact_last_name":"Espy","contact_number":"8472063185","insurance_expiration":"2020-05-14","photo_url":"https://robohash.org/laboriosamveldolorem.jpg?size=50x50&set=set1"},
      {"student_id":2,"gradeID":2,"first_name":"Miner","last_name":"Antonat","age":18,"schoolID":20,"has_insurance":true,"has_birthcert":true,"dues":2166.77,"special_needs":false,"contact_first_name":"Tyne","contact_last_name":"Wilkison","contact_number":"1167286060","insurance_expiration":"2020-08-29","photo_url":"https://robohash.org/accusantiumliberohic.png?size=50x50&set=set1"},
      {"student_id":3,"gradeID":12,"first_name":"Adela","last_name":"Shulem","age":5,"schoolID":10,"has_insurance":false,"has_birthcert":false,"dues":631.35,"special_needs":false,"contact_first_name":"Matthew","contact_last_name":"Jendrich","contact_number":"4866864750","insurance_expiration":"2020-10-08","photo_url":"https://robohash.org/quibusdameosdeserunt.bmp?size=50x50&set=set1"},
      {"student_id":4,"gradeID":5,"first_name":"Ruddy","last_name":"Jeskins","age":9,"schoolID":8,"has_insurance":true,"has_birthcert":true,"dues":1519.54,"special_needs":false,"contact_first_name":"Franz","contact_last_name":"Kennewell","contact_number":"8113765340","insurance_expiration":"2019-04-30","photo_url":"https://robohash.org/ipsaquiquia.bmp?size=50x50&set=set1"},
      {"student_id":5,"gradeID":2,"first_name":"Jimmy","last_name":"Ritmeyer","age":16,"schoolID":7,"has_insurance":true,"has_birthcert":true,"dues":2157.79,"special_needs":true,"contact_first_name":"Dru","contact_last_name":"Schutte","contact_number":"8913725369","insurance_expiration":"2021-01-30","photo_url":"https://robohash.org/estimpeditautem.png?size=50x50&set=set1"},
      {"student_id":6,"gradeID":7,"first_name":"Arty","last_name":"Waite","age":9,"schoolID":30,"has_insurance":true,"has_birthcert":false,"dues":929.63,"special_needs":false,"contact_first_name":"Millicent","contact_last_name":"Buyers","contact_number":"3789471489","insurance_expiration":"2020-07-01","photo_url":"https://robohash.org/easedid.png?size=50x50&set=set1"},
      {"student_id":7,"gradeID":6,"first_name":"Aylmer","last_name":"Vesco","age":6,"schoolID":28,"has_insurance":false,"has_birthcert":true,"dues":78.19,"special_needs":false,"contact_first_name":"Dori","contact_last_name":"Gurys","contact_number":"4301112128","insurance_expiration":"2020-08-27","photo_url":"https://robohash.org/placeatsolutaqui.png?size=50x50&set=set1"},
      {"student_id":8,"gradeID":6,"first_name":"Ashlie","last_name":"Alliott","age":9,"schoolID":30,"has_insurance":false,"has_birthcert":true,"dues":1272.86,"special_needs":false,"contact_first_name":"Pansie","contact_last_name":"Kasman","contact_number":"7318645645","insurance_expiration":"2019-04-07","photo_url":"https://robohash.org/natusofficiisnemo.bmp?size=50x50&set=set1"},
      {"student_id":9,"gradeID":11,"first_name":"Roda","last_name":"Ruecastle","age":7,"schoolID":27,"has_insurance":true,"has_birthcert":true,"dues":1667.06,"special_needs":false,"contact_first_name":"Jena","contact_last_name":"Lowre","contact_number":"7065646401","insurance_expiration":"2019-09-21","photo_url":"https://robohash.org/velquidemqui.png?size=50x50&set=set1"},
      {"student_id":10,"gradeID":6,"first_name":"Calley","last_name":"Pagden","age":13,"schoolID":27,"has_insurance":false,"has_birthcert":false,"dues":2323.79,"special_needs":true,"contact_first_name":"Wake","contact_last_name":"Hartus","contact_number":"3905764531","insurance_expiration":"2019-12-17","photo_url":"https://robohash.org/utomnisad.bmp?size=50x50&set=set1"},
      {"student_id":11,"gradeID":5,"first_name":"Wade","last_name":"Marzelle","age":7,"schoolID":11,"has_insurance":false,"has_birthcert":true,"dues":850.88,"special_needs":false,"contact_first_name":"Constantine","contact_last_name":"Foord","contact_number":"8071549647","insurance_expiration":"2020-10-27","photo_url":"https://robohash.org/itaquequiaquod.png?size=50x50&set=set1"},
      {"student_id":12,"gradeID":6,"first_name":"Colly","last_name":"Peddel","age":18,"schoolID":11,"has_insurance":false,"has_birthcert":true,"dues":1287.57,"special_needs":true,"contact_first_name":"Ev","contact_last_name":"Maysor","contact_number":"2453440642","insurance_expiration":"2019-10-25","photo_url":"https://robohash.org/ullamautillum.jpg?size=50x50&set=set1"},
      {"student_id":13,"gradeID":10,"first_name":"Tobias","last_name":"Bertwistle","age":10,"schoolID":15,"has_insurance":true,"has_birthcert":true,"dues":12.34,"special_needs":false,"contact_first_name":"Honey","contact_last_name":"Strand","contact_number":"5431659300","insurance_expiration":"2019-11-18","photo_url":"https://robohash.org/quirepellatdolor.png?size=50x50&set=set1"},
      {"student_id":14,"gradeID":11,"first_name":"Erin","last_name":"Petofi","age":8,"schoolID":28,"has_insurance":false,"has_birthcert":true,"dues":1189.13,"special_needs":false,"contact_first_name":"Husein","contact_last_name":"Petrushkevich","contact_number":"5049483248","insurance_expiration":"2019-11-21","photo_url":"https://robohash.org/estcupiditatequia.bmp?size=50x50&set=set1"},
      {"student_id":15,"gradeID":1,"first_name":"Terrence","last_name":"Giacubbo","age":14,"schoolID":21,"has_insurance":true,"has_birthcert":true,"dues":1662.25,"special_needs":false,"contact_first_name":"Brittney","contact_last_name":"Gillian","contact_number":"1327863550","insurance_expiration":"2020-12-22","photo_url":"https://robohash.org/quibusdamipsamet.jpg?size=50x50&set=set1"},
      {"student_id":16,"gradeID":10,"first_name":"Aubrey","last_name":"Stannis","age":14,"schoolID":25,"has_insurance":true,"has_birthcert":false,"dues":1010.48,"special_needs":false,"contact_first_name":"Jocelin","contact_last_name":"Stanluck","contact_number":"9503329022","insurance_expiration":"2019-08-29","photo_url":"https://robohash.org/estquasiipsa.bmp?size=50x50&set=set1"},
      {"student_id":17,"gradeID":11,"first_name":"Judd","last_name":"Burton","age":11,"schoolID":8,"has_insurance":false,"has_birthcert":true,"dues":613.56,"special_needs":false,"contact_first_name":"Johnny","contact_last_name":"Jarman","contact_number":"5923685262","insurance_expiration":"2020-05-27","photo_url":"https://robohash.org/nihilexcepturirerum.jpg?size=50x50&set=set1"},
      {"student_id":18,"gradeID":4,"first_name":"Hayes","last_name":"McSherry","age":18,"schoolID":29,"has_insurance":false,"has_birthcert":true,"dues":1675.76,"special_needs":false,"contact_first_name":"Geraldine","contact_last_name":"Klemt","contact_number":"1523496062","insurance_expiration":"2019-08-09","photo_url":"https://robohash.org/aspernaturveniamasperiores.bmp?size=50x50&set=set1"},
      {"student_id":19,"gradeID":4,"first_name":"Loren","last_name":"Nairn","age":11,"schoolID":28,"has_insurance":false,"has_birthcert":false,"dues":2462.37,"special_needs":true,"contact_first_name":"Rina","contact_last_name":"Greenside","contact_number":"8867103214","insurance_expiration":"2019-07-13","photo_url":"https://robohash.org/veritatistemporainventore.jpg?size=50x50&set=set1"},
      {"student_id":20,"gradeID":11,"first_name":"Devlen","last_name":"MacTavish","age":7,"schoolID":4,"has_insurance":true,"has_birthcert":true,"dues":837.56,"special_needs":false,"contact_first_name":"Noach","contact_last_name":"Whaplington","contact_number":"3877636218","insurance_expiration":"2019-05-24","photo_url":"https://robohash.org/molestiaesaepeexpedita.bmp?size=50x50&set=set1"},
      {"student_id":21,"gradeID":7,"first_name":"Homere","last_name":"Guerre","age":13,"schoolID":17,"has_insurance":false,"has_birthcert":false,"dues":2165.57,"special_needs":false,"contact_first_name":"Nero","contact_last_name":"Haddleton","contact_number":"6135374956","insurance_expiration":"2020-07-08","photo_url":"https://robohash.org/nihilquidemunde.png?size=50x50&set=set1"},
      {"student_id":22,"gradeID":9,"first_name":"Jamie","last_name":"Andrichuk","age":13,"schoolID":19,"has_insurance":true,"has_birthcert":true,"dues":2332.13,"special_needs":true,"contact_first_name":"Stearn","contact_last_name":"Cuphus","contact_number":"1859630591","insurance_expiration":"2020-04-03","photo_url":"https://robohash.org/rerumnullaquo.jpg?size=50x50&set=set1"},
      {"student_id":23,"gradeID":5,"first_name":"Raychel","last_name":"Tomashov","age":8,"schoolID":25,"has_insurance":true,"has_birthcert":true,"dues":600.7,"special_needs":false,"contact_first_name":"Johann","contact_last_name":"Cloney","contact_number":"1325366648","insurance_expiration":"2019-12-10","photo_url":"https://robohash.org/temporibusrerumamet.bmp?size=50x50&set=set1"},
      {"student_id":24,"gradeID":1,"first_name":"Massimo","last_name":"Tollett","age":7,"schoolID":13,"has_insurance":false,"has_birthcert":true,"dues":2475.56,"special_needs":true,"contact_first_name":"Wendye","contact_last_name":"Redwin","contact_number":"7336546536","insurance_expiration":"2019-12-08","photo_url":"https://robohash.org/velitharumquisquam.bmp?size=50x50&set=set1"},
      {"student_id":25,"gradeID":8,"first_name":"Omero","last_name":"Tombs","age":14,"schoolID":25,"has_insurance":true,"has_birthcert":true,"dues":1269.96,"special_needs":false,"contact_first_name":"Carry","contact_last_name":"Helliker","contact_number":"5775482578","insurance_expiration":"2019-10-17","photo_url":"https://robohash.org/autquidolores.png?size=50x50&set=set1"},
      {"student_id":26,"gradeID":3,"first_name":"Lloyd","last_name":"Priddey","age":16,"schoolID":28,"has_insurance":true,"has_birthcert":false,"dues":972.71,"special_needs":false,"contact_first_name":"Tiffie","contact_last_name":"Vannacci","contact_number":"3069350121","insurance_expiration":"2020-09-01","photo_url":"https://robohash.org/adtemporibusmagnam.bmp?size=50x50&set=set1"},
      {"student_id":27,"gradeID":10,"first_name":"Lucille","last_name":"Edington","age":7,"schoolID":20,"has_insurance":false,"has_birthcert":true,"dues":1693.83,"special_needs":false,"contact_first_name":"Dante","contact_last_name":"McCullough","contact_number":"5369034082","insurance_expiration":"2020-11-16","photo_url":"https://robohash.org/nobisarchitectoeos.png?size=50x50&set=set1"},
      {"student_id":28,"gradeID":9,"first_name":"Charmine","last_name":"Rankin","age":7,"schoolID":22,"has_insurance":false,"has_birthcert":false,"dues":53.34,"special_needs":true,"contact_first_name":"Aggie","contact_last_name":"Twinn","contact_number":"8227368338","insurance_expiration":"2019-11-01","photo_url":"https://robohash.org/eterrorpossimus.jpg?size=50x50&set=set1"},
      {"student_id":29,"gradeID":9,"first_name":"Kalli","last_name":"Edkins","age":10,"schoolID":22,"has_insurance":true,"has_birthcert":true,"dues":872.66,"special_needs":true,"contact_first_name":"Nerty","contact_last_name":"Dwine","contact_number":"9309985214","insurance_expiration":"2020-06-23","photo_url":"https://robohash.org/quiaquiipsam.bmp?size=50x50&set=set1"},
      {"student_id":30,"gradeID":12,"first_name":"Rockwell","last_name":"Instrell","age":10,"schoolID":18,"has_insurance":false,"has_birthcert":false,"dues":1777.72,"special_needs":true,"contact_first_name":"Adelaida","contact_last_name":"Smallshaw","contact_number":"6934371038","insurance_expiration":"2019-09-20","photo_url":"https://robohash.org/similiquedebitiset.jpg?size=50x50&set=set1"},
      {"student_id":31,"gradeID":2,"first_name":"Buck","last_name":"Pfeifer","age":16,"schoolID":5,"has_insurance":true,"has_birthcert":false,"dues":155.63,"special_needs":false,"contact_first_name":"Laurice","contact_last_name":"Mallaby","contact_number":"1131104566","insurance_expiration":"2019-06-08","photo_url":"https://robohash.org/quiuteligendi.png?size=50x50&set=set1"},
      {"student_id":32,"gradeID":2,"first_name":"Matthus","last_name":"Pearmine","age":12,"schoolID":14,"has_insurance":true,"has_birthcert":true,"dues":1434.07,"special_needs":false,"contact_first_name":"Marnie","contact_last_name":"Gibbie","contact_number":"5286665370","insurance_expiration":"2020-04-27","photo_url":"https://robohash.org/consequunturquibusdamquo.jpg?size=50x50&set=set1"},
      {"student_id":33,"gradeID":8,"first_name":"Cosme","last_name":"Haseley","age":7,"schoolID":20,"has_insurance":true,"has_birthcert":true,"dues":587.16,"special_needs":false,"contact_first_name":"Jecho","contact_last_name":"Makey","contact_number":"6084576088","insurance_expiration":"2020-06-26","photo_url":"https://robohash.org/ducimusestexcepturi.jpg?size=50x50&set=set1"},
      {"student_id":34,"gradeID":8,"first_name":"June","last_name":"Turl","age":16,"schoolID":11,"has_insurance":false,"has_birthcert":false,"dues":1573.92,"special_needs":true,"contact_first_name":"Bunnie","contact_last_name":"Trimming","contact_number":"4975981973","insurance_expiration":"2019-07-26","photo_url":"https://robohash.org/omnisrerumest.jpg?size=50x50&set=set1"},
      {"student_id":35,"gradeID":11,"first_name":"Evangelina","last_name":"Blindt","age":7,"schoolID":25,"has_insurance":true,"has_birthcert":false,"dues":767.88,"special_needs":false,"contact_first_name":"Bria","contact_last_name":"Gell","contact_number":"4209260184","insurance_expiration":"2019-08-03","photo_url":"https://robohash.org/omniscupiditatererum.jpg?size=50x50&set=set1"},
      {"student_id":36,"gradeID":7,"first_name":"Yankee","last_name":"McKerron","age":14,"schoolID":3,"has_insurance":false,"has_birthcert":false,"dues":1328.36,"special_needs":true,"contact_first_name":"Elton","contact_last_name":"Runacres","contact_number":"4339242047","insurance_expiration":"2019-10-05","photo_url":"https://robohash.org/corruptisapientesint.jpg?size=50x50&set=set1"},
      {"student_id":37,"gradeID":10,"first_name":"Reeba","last_name":"Bester","age":10,"schoolID":26,"has_insurance":false,"has_birthcert":true,"dues":1391.45,"special_needs":false,"contact_first_name":"Harmonie","contact_last_name":"Guiet","contact_number":"7367343565","insurance_expiration":"2019-07-14","photo_url":"https://robohash.org/cumaccusantiumqui.bmp?size=50x50&set=set1"},
      {"student_id":38,"gradeID":10,"first_name":"Bobbe","last_name":"Bulward","age":6,"schoolID":29,"has_insurance":false,"has_birthcert":true,"dues":359.64,"special_needs":true,"contact_first_name":"Maximilien","contact_last_name":"Jarrold","contact_number":"3626705020","insurance_expiration":"2020-05-21","photo_url":"https://robohash.org/idrerumquia.png?size=50x50&set=set1"},
      {"student_id":39,"gradeID":1,"first_name":"Cahra","last_name":"Ludwikiewicz","age":7,"schoolID":17,"has_insurance":true,"has_birthcert":true,"dues":2267.42,"special_needs":true,"contact_first_name":"Clarance","contact_last_name":"Reicherz","contact_number":"5167415421","insurance_expiration":"2020-02-04","photo_url":"https://robohash.org/deseruntquipossimus.bmp?size=50x50&set=set1"},
      {"student_id":40,"gradeID":12,"first_name":"Akim","last_name":"Sherewood","age":14,"schoolID":3,"has_insurance":false,"has_birthcert":false,"dues":1882.18,"special_needs":false,"contact_first_name":"Darci","contact_last_name":"Charity","contact_number":"6884647218","insurance_expiration":"2019-07-20","photo_url":"https://robohash.org/voluptatemeamodi.png?size=50x50&set=set1"},
      {"student_id":41,"gradeID":3,"first_name":"Yale","last_name":"Katt","age":5,"schoolID":4,"has_insurance":true,"has_birthcert":false,"dues":127.82,"special_needs":true,"contact_first_name":"Davina","contact_last_name":"Ledgley","contact_number":"2948466870","insurance_expiration":"2020-05-19","photo_url":"https://robohash.org/nullaquianumquam.jpg?size=50x50&set=set1"},
      {"student_id":42,"gradeID":8,"first_name":"Lola","last_name":"Crocetti","age":14,"schoolID":12,"has_insurance":true,"has_birthcert":true,"dues":2472.97,"special_needs":false,"contact_first_name":"Kellie","contact_last_name":"Dykins","contact_number":"6424315773","insurance_expiration":"2019-07-01","photo_url":"https://robohash.org/sedlaboriosamatque.bmp?size=50x50&set=set1"},
      {"student_id":43,"gradeID":3,"first_name":"Alano","last_name":"Corradeschi","age":14,"schoolID":4,"has_insurance":true,"has_birthcert":true,"dues":1923.37,"special_needs":false,"contact_first_name":"Thekla","contact_last_name":"Lomaz","contact_number":"5321772445","insurance_expiration":"2019-11-12","photo_url":"https://robohash.org/laboriosamomnislabore.png?size=50x50&set=set1"},
      {"student_id":44,"gradeID":9,"first_name":"Stacia","last_name":"Wetheril","age":7,"schoolID":4,"has_insurance":true,"has_birthcert":false,"dues":1053.3,"special_needs":true,"contact_first_name":"Dicky","contact_last_name":"Moresby","contact_number":"6677185206","insurance_expiration":"2019-06-10","photo_url":"https://robohash.org/pariaturtemporibusmodi.jpg?size=50x50&set=set1"},
      {"student_id":45,"gradeID":7,"first_name":"Ashley","last_name":"Skatcher","age":16,"schoolID":7,"has_insurance":false,"has_birthcert":true,"dues":33.63,"special_needs":true,"contact_first_name":"Gypsy","contact_last_name":"Charnley","contact_number":"5343813782","insurance_expiration":"2020-08-20","photo_url":"https://robohash.org/beataeetvoluptas.png?size=50x50&set=set1"},
      {"student_id":46,"gradeID":9,"first_name":"Orran","last_name":"Stannis","age":14,"schoolID":6,"has_insurance":true,"has_birthcert":true,"dues":928.02,"special_needs":false,"contact_first_name":"Dagmar","contact_last_name":"Crowch","contact_number":"7987754952","insurance_expiration":"2020-01-20","photo_url":"https://robohash.org/etvoluptatemvoluptatem.jpg?size=50x50&set=set1"},
      {"student_id":47,"gradeID":5,"first_name":"Kissee","last_name":"Leggen","age":6,"schoolID":24,"has_insurance":true,"has_birthcert":false,"dues":1854.67,"special_needs":true,"contact_first_name":"Doti","contact_last_name":"Semour","contact_number":"5466752809","insurance_expiration":"2020-01-13","photo_url":"https://robohash.org/utliberovelit.bmp?size=50x50&set=set1"},
      {"student_id":48,"gradeID":5,"first_name":"Ingmar","last_name":"Farrent","age":13,"schoolID":15,"has_insurance":false,"has_birthcert":true,"dues":1028.22,"special_needs":false,"contact_first_name":"Clifford","contact_last_name":"McCue","contact_number":"7376917399","insurance_expiration":"2019-08-19","photo_url":"https://robohash.org/quidemodita.jpg?size=50x50&set=set1"},
      {"student_id":49,"gradeID":6,"first_name":"Florri","last_name":"Maffione","age":12,"schoolID":27,"has_insurance":false,"has_birthcert":true,"dues":1814.13,"special_needs":true,"contact_first_name":"Ulysses","contact_last_name":"Sidle","contact_number":"2623560988","insurance_expiration":"2021-02-12","photo_url":"https://robohash.org/delenitieaet.png?size=50x50&set=set1"},
      {"student_id":50,"gradeID":8,"first_name":"Candis","last_name":"Missenden","age":15,"schoolID":19,"has_insurance":true,"has_birthcert":true,"dues":1086.54,"special_needs":false,"contact_first_name":"Fiann","contact_last_name":"Olesen","contact_number":"3634348275","insurance_expiration":"2020-03-28","photo_url":"https://robohash.org/facereaspernaturea.png?size=50x50&set=set1"},
      {"student_id":51,"gradeID":2,"first_name":"Dael","last_name":"Velden","age":8,"schoolID":30,"has_insurance":false,"has_birthcert":true,"dues":612.36,"special_needs":false,"contact_first_name":"Gilberte","contact_last_name":"Stimpson","contact_number":"1568938721","insurance_expiration":"2019-06-11","photo_url":"https://robohash.org/sinteosodio.jpg?size=50x50&set=set1"},
      {"student_id":52,"gradeID":7,"first_name":"Karylin","last_name":"Seson","age":17,"schoolID":2,"has_insurance":true,"has_birthcert":true,"dues":1985.05,"special_needs":true,"contact_first_name":"Orson","contact_last_name":"Vear","contact_number":"5517615790","insurance_expiration":"2019-09-26","photo_url":"https://robohash.org/possimusaliquamdolorem.png?size=50x50&set=set1"},
      {"student_id":53,"gradeID":3,"first_name":"Carmella","last_name":"Bortoli","age":9,"schoolID":27,"has_insurance":false,"has_birthcert":false,"dues":1647.03,"special_needs":true,"contact_first_name":"Tull","contact_last_name":"Keneford","contact_number":"5328488790","insurance_expiration":"2020-07-11","photo_url":"https://robohash.org/itaquerepellatquas.png?size=50x50&set=set1"},
      {"student_id":54,"gradeID":6,"first_name":"Loreen","last_name":"Broad","age":6,"schoolID":17,"has_insurance":false,"has_birthcert":false,"dues":1954.01,"special_needs":false,"contact_first_name":"Cindy","contact_last_name":"Lyptrade","contact_number":"2061224396","insurance_expiration":"2019-12-17","photo_url":"https://robohash.org/assumendaquisaepe.jpg?size=50x50&set=set1"},
      {"student_id":55,"gradeID":11,"first_name":"Carlyle","last_name":"Monroe","age":18,"schoolID":5,"has_insurance":true,"has_birthcert":true,"dues":940.26,"special_needs":false,"contact_first_name":"Bobby","contact_last_name":"Dubois","contact_number":"4455634689","insurance_expiration":"2019-06-21","photo_url":"https://robohash.org/doloresitaquemollitia.jpg?size=50x50&set=set1"},
      ]);
    });
};