exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('students').del()
      .then(function () {
        // Inserts seed entries
        return knex('students').insert([
        {"grade":4,"first_name":"Langston","last_name":"Tenpenny","age":16,"schoolID":1,"has_insurance":true,"has_birthcert":true,"dues":1848.32,"special_needs":false,"contact_first_name":"Iorgo","contact_last_name":"Isaksen","contact_number":"1545877332","insurance_expiration":"2020-07-22","photo_url":"https://robohash.org/occaecatiautmagni.jpg?size=50x50&set=set1"},
        {"grade":1,"first_name":"Rickey","last_name":"Kinglake","age":11,"schoolID":2,"has_insurance":false,"has_birthcert":true,"dues":735.77,"special_needs":true,"contact_first_name":"Lock","contact_last_name":"Abate","contact_number":"5908395510","insurance_expiration":"2020-02-10","photo_url":"https://robohash.org/aliquamnatusneque.jpg?size=50x50&set=set1"},
        {"grade":2,"first_name":"Laurie","last_name":"MacPake","age":6,"schoolID":1,"has_insurance":true,"has_birthcert":true,"dues":1723.53,"special_needs":false,"contact_first_name":"Hamlen","contact_last_name":"Stallion","contact_number":"8492410917","insurance_expiration":"2021-02-20","photo_url":"https://robohash.org/molestiaeeiusipsam.bmp?size=50x50&set=set1"},
        {"grade":3,"first_name":"Goraud","last_name":"Magnus","age":15,"schoolID":2,"has_insurance":false,"has_birthcert":true,"dues":2373.75,"special_needs":false,"contact_first_name":"Marian","contact_last_name":"Picken","contact_number":"2471110001","insurance_expiration":"2019-08-14","photo_url":"https://robohash.org/evenietquasideserunt.png?size=50x50&set=set1"},
        {"grade":4,"first_name":"Gothart","last_name":"Harroway","age":9,"schoolID":1,"has_insurance":true,"has_birthcert":true,"dues":2304.98,"special_needs":true,"contact_first_name":"Sherri","contact_last_name":"Leipold","contact_number":"7351526048","insurance_expiration":"2019-05-05","photo_url":"https://robohash.org/etevenietconsequuntur.jpg?size=50x50&set=set1"},
        {"grade":5,"first_name":"Florinda","last_name":"McArte","age":15,"schoolID":2,"has_insurance":true,"has_birthcert":true,"dues":306.0,"special_needs":true,"contact_first_name":"Irma","contact_last_name":"Murrell","contact_number":"2169132066","insurance_expiration":"2020-01-05","photo_url":"https://robohash.org/consequaturquiquam.png?size=50x50&set=set1"},
        {"grade":6,"first_name":"Carny","last_name":"Taudevin","age":13,"schoolID":1,"has_insurance":false,"has_birthcert":true,"dues":1261.43,"special_needs":true,"contact_first_name":"Jasen","contact_last_name":"Etock","contact_number":"1988460136","insurance_expiration":"2020-04-30","photo_url":"https://robohash.org/illumquidolor.png?size=50x50&set=set1"},
        {"grade":7,"first_name":"Hurleigh","last_name":"Middiff","age":11,"schoolID":2,"has_insurance":true,"has_birthcert":true,"dues":2365.67,"special_needs":false,"contact_first_name":"Juliet","contact_last_name":"Scarfe","contact_number":"5115473753","insurance_expiration":"2020-01-17","photo_url":"https://robohash.org/corruptimodieum.bmp?size=50x50&set=set1"},
        {"grade":8,"first_name":"Kerry","last_name":"Strickler","age":12,"schoolID":1,"has_insurance":false,"has_birthcert":true,"dues":1154.38,"special_needs":false,"contact_first_name":"Jacynth","contact_last_name":"McKimmie","contact_number":"1746594804","insurance_expiration":"2021-02-16","photo_url":"https://robohash.org/sequivoluptatumexpedita.png?size=50x50&set=set1"},
        {"grade":9,"first_name":"Dayna","last_name":"Barcroft","age":9,"schoolID":2,"has_insurance":true,"has_birthcert":true,"dues":1097.63,"special_needs":true,"contact_first_name":"Carling","contact_last_name":"Lodemann","contact_number":"7355539751","insurance_expiration":"2020-12-16","photo_url":"https://robohash.org/cumqueetsimilique.png?size=50x50&set=set1"},
        {"grade":10,"first_name":"Araldo","last_name":"Ormston","age":8,"schoolID":1,"has_insurance":true,"has_birthcert":true,"dues":2230.68,"special_needs":true,"contact_first_name":"Greta","contact_last_name":"Stammer","contact_number":"6501040385","insurance_expiration":"2019-11-11","photo_url":"https://robohash.org/nonexpeditasint.jpg?size=50x50&set=set1"},
        {"grade":11,"first_name":"Joellyn","last_name":"Hubbins","age":11,"schoolID":2,"has_insurance":false,"has_birthcert":true,"dues":457.08,"special_needs":true,"contact_first_name":"Raynor","contact_last_name":"Mahood","contact_number":"7414386616","insurance_expiration":"2019-05-21","photo_url":"https://robohash.org/etcommodiiste.bmp?size=50x50&set=set1"},
        {"grade":12,"first_name":"Harald","last_name":"Ottosen","age":12,"schoolID":1,"has_insurance":false,"has_birthcert":false,"dues":2161.25,"special_needs":false,"contact_first_name":"Starlene","contact_last_name":"Birchenough","contact_number":"6411375209","insurance_expiration":"2020-07-23","photo_url":"https://robohash.org/quibusdamreprehenderitdolor.jpg?size=50x50&set=set1"},
        {"grade":1,"first_name":"Joceline","last_name":"Tenby","age":16,"schoolID":2,"has_insurance":false,"has_birthcert":true,"dues":2160.17,"special_needs":false,"contact_first_name":"Godwin","contact_last_name":"Glasebrook","contact_number":"6915063961","insurance_expiration":"2021-02-15","photo_url":"https://robohash.org/etvoluptatemdistinctio.png?size=50x50&set=set1"},
        {"grade":2,"first_name":"Bryan","last_name":"Gorrick","age":15,"schoolID":1,"has_insurance":false,"has_birthcert":true,"dues":2370.33,"special_needs":false,"contact_first_name":"Desirae","contact_last_name":"Widd","contact_number":"8629669307","insurance_expiration":"2021-01-07","photo_url":"https://robohash.org/autemdolorenim.jpg?size=50x50&set=set1"},
        {"grade":3,"first_name":"Frederica","last_name":"Draude","age":18,"schoolID":2,"has_insurance":false,"has_birthcert":true,"dues":1442.94,"special_needs":true,"contact_first_name":"Derby","contact_last_name":"Vettore","contact_number":"3025200696","insurance_expiration":"2019-08-22","photo_url":"https://robohash.org/fugadebitisfacere.jpg?size=50x50&set=set1"},
        {"grade":4,"first_name":"Winona","last_name":"Penylton","age":15,"schoolID":1,"has_insurance":false,"has_birthcert":true,"dues":170.54,"special_needs":true,"contact_first_name":"Yevette","contact_last_name":"Petrosian","contact_number":"8272878010","insurance_expiration":"2020-05-18","photo_url":"https://robohash.org/quasitemporibusunde.bmp?size=50x50&set=set1"},
        {"grade":5,"first_name":"Andreas","last_name":"Efford","age":12,"schoolID":2,"has_insurance":true,"has_birthcert":true,"dues":946.96,"special_needs":true,"contact_first_name":"Binnie","contact_last_name":"Paragreen","contact_number":"7341626376","insurance_expiration":"2019-11-30","photo_url":"https://robohash.org/etconsequaturut.jpg?size=50x50&set=set1"},
        {"grade":6,"first_name":"Cordell","last_name":"Utting","age":16,"schoolID":1,"has_insurance":true,"has_birthcert":false,"dues":1457.79,"special_needs":false,"contact_first_name":"Kathi","contact_last_name":"Cornehl","contact_number":"9118264460","insurance_expiration":"2019-10-23","photo_url":"https://robohash.org/inventoreutdolores.png?size=50x50&set=set1"},
        {"grade":7,"first_name":"Cati","last_name":"Van der Kruys","age":16,"schoolID":2,"has_insurance":true,"has_birthcert":true,"dues":357.12,"special_needs":false,"contact_first_name":"Correy","contact_last_name":"Alpin","contact_number":"8843483623","insurance_expiration":"2020-01-07","photo_url":"https://robohash.org/quaenonmaxime.jpg?size=50x50&set=set1"},
        {"grade":8,"first_name":"Malynda","last_name":"Skeels","age":5,"schoolID":1,"has_insurance":true,"has_birthcert":true,"dues":1515.54,"special_needs":true,"contact_first_name":"Shandie","contact_last_name":"Nani","contact_number":"3097973198","insurance_expiration":"2021-01-21","photo_url":"https://robohash.org/voluptatemdolorfugit.jpg?size=50x50&set=set1"},
        {"grade":9,"first_name":"Devonna","last_name":"Sherland","age":15,"schoolID":2,"has_insurance":false,"has_birthcert":true,"dues":596.31,"special_needs":false,"contact_first_name":"Annamaria","contact_last_name":"McSkin","contact_number":"1249898288","insurance_expiration":"2020-08-02","photo_url":"https://robohash.org/quiseaqueinventore.jpg?size=50x50&set=set1"},
        {"grade":10,"first_name":"Darnell","last_name":"Gleadle","age":13,"schoolID":1,"has_insurance":false,"has_birthcert":true,"dues":875.04,"special_needs":false,"contact_first_name":"Mal","contact_last_name":"Eveque","contact_number":"9069018255","insurance_expiration":"2019-08-11","photo_url":"https://robohash.org/quisnostrumerror.bmp?size=50x50&set=set1"},
        {"grade":11,"first_name":"Andriette","last_name":"Gate","age":6,"schoolID":2,"has_insurance":true,"has_birthcert":true,"dues":1787.69,"special_needs":false,"contact_first_name":"Abbie","contact_last_name":"Palliser","contact_number":"2553286352","insurance_expiration":"2019-03-23","photo_url":"https://robohash.org/placeatsuntvelit.png?size=50x50&set=set1"},
        {"grade":12,"first_name":"Darby","last_name":"Van Velde","age":13,"schoolID":1,"has_insurance":true,"has_birthcert":false,"dues":888.77,"special_needs":false,"contact_first_name":"Cherise","contact_last_name":"Cabena","contact_number":"4313708897","insurance_expiration":"2021-01-25","photo_url":"https://robohash.org/cupiditatesimiliquedoloribus.jpg?size=50x50&set=set1"},
        {"grade":1,"first_name":"Valle","last_name":"Hukins","age":10,"schoolID":2,"has_insurance":true,"has_birthcert":false,"dues":543.01,"special_needs":true,"contact_first_name":"Walton","contact_last_name":"Goudy","contact_number":"4941690084","insurance_expiration":"2020-10-23","photo_url":"https://robohash.org/molestiasdelenitiqui.jpg?size=50x50&set=set1"},
        {"grade":2,"first_name":"Glynnis","last_name":"Smails","age":13,"schoolID":1,"has_insurance":false,"has_birthcert":true,"dues":1387.92,"special_needs":true,"contact_first_name":"Thane","contact_last_name":"Southgate","contact_number":"8819336986","insurance_expiration":"2020-07-14","photo_url":"https://robohash.org/rationeutvoluptate.png?size=50x50&set=set1"},
        {"grade":3,"first_name":"Vasily","last_name":"Dymocke","age":11,"schoolID":2,"has_insurance":false,"has_birthcert":true,"dues":1257.87,"special_needs":true,"contact_first_name":"Aryn","contact_last_name":"Wittering","contact_number":"1326478160","insurance_expiration":"2020-02-05","photo_url":"https://robohash.org/eumquimollitia.bmp?size=50x50&set=set1"},
        {"grade":4,"first_name":"Doralia","last_name":"Debill","age":10,"schoolID":1,"has_insurance":false,"has_birthcert":true,"dues":1223.83,"special_needs":false,"contact_first_name":"Emmye","contact_last_name":"Hadlow","contact_number":"1122590488","insurance_expiration":"2020-01-18","photo_url":"https://robohash.org/reprehenderitquisquamanimi.png?size=50x50&set=set1"},
        {"grade":5,"first_name":"Colver","last_name":"Ohrt","age":16,"schoolID":2,"has_insurance":true,"has_birthcert":false,"dues":201.23,"special_needs":true,"contact_first_name":"Janey","contact_last_name":"Rochell","contact_number":"2771644360","insurance_expiration":"2020-09-10","photo_url":"https://robohash.org/consequaturdoloresnihil.bmp?size=50x50&set=set1"},
        {"grade":6,"first_name":"Annabal","last_name":"Papworth","age":5,"schoolID":1,"has_insurance":true,"has_birthcert":false,"dues":1378.88,"special_needs":false,"contact_first_name":"Loretta","contact_last_name":"Beedon","contact_number":"8139383586","insurance_expiration":"2019-09-06","photo_url":"https://robohash.org/nihilmodiid.jpg?size=50x50&set=set1"},
        {"grade":7,"first_name":"Ann-marie","last_name":"Naptine","age":16,"schoolID":2,"has_insurance":false,"has_birthcert":true,"dues":317.88,"special_needs":false,"contact_first_name":"Maribel","contact_last_name":"Upward","contact_number":"3175993355","insurance_expiration":"2019-11-15","photo_url":"https://robohash.org/voluptatemtemporarerum.png?size=50x50&set=set1"},
        {"grade":8,"first_name":"Kanya","last_name":"Dyble","age":13,"schoolID":1,"has_insurance":true,"has_birthcert":false,"dues":1831.15,"special_needs":false,"contact_first_name":"Park","contact_last_name":"Lorentzen","contact_number":"6203185355","insurance_expiration":"2019-07-04","photo_url":"https://robohash.org/repudiandaemolestiaeomnis.png?size=50x50&set=set1"},
        {"grade":9,"first_name":"Andras","last_name":"Castagneto","age":12,"schoolID":2,"has_insurance":false,"has_birthcert":true,"dues":1660.25,"special_needs":false,"contact_first_name":"Trudi","contact_last_name":"Gerg","contact_number":"9044130405","insurance_expiration":"2021-01-28","photo_url":"https://robohash.org/etetvoluptas.jpg?size=50x50&set=set1"},
        {"grade":10,"first_name":"Callean","last_name":"Giorgio","age":8,"schoolID":1,"has_insurance":false,"has_birthcert":true,"dues":295.05,"special_needs":true,"contact_first_name":"Kylila","contact_last_name":"Grundy","contact_number":"7035147587","insurance_expiration":"2019-09-14","photo_url":"https://robohash.org/abdignissimosconsequuntur.png?size=50x50&set=set1"},
        {"grade":11,"first_name":"Roxine","last_name":"Farrans","age":11,"schoolID":2,"has_insurance":true,"has_birthcert":false,"dues":128.04,"special_needs":false,"contact_first_name":"Aryn","contact_last_name":"Jankiewicz","contact_number":"6049192520","insurance_expiration":"2021-01-30","photo_url":"https://robohash.org/molestiaeestnatus.jpg?size=50x50&set=set1"},
        {"grade":12,"first_name":"Brent","last_name":"Meneer","age":13,"schoolID":1,"has_insurance":true,"has_birthcert":true,"dues":80.23,"special_needs":true,"contact_first_name":"Tamara","contact_last_name":"Duddridge","contact_number":"5872088182","insurance_expiration":"2019-09-10","photo_url":"https://robohash.org/oditquiaearum.png?size=50x50&set=set1"},
        {"grade":1,"first_name":"Adaline","last_name":"Duffin","age":14,"schoolID":2,"has_insurance":true,"has_birthcert":true,"dues":32.65,"special_needs":false,"contact_first_name":"Griffie","contact_last_name":"Daintier","contact_number":"2901901284","insurance_expiration":"2020-09-14","photo_url":"https://robohash.org/eosvoluptatumquis.jpg?size=50x50&set=set1"},]);
      });
  };