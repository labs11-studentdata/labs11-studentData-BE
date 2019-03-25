
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('schools').del()
    .then(function () {
      // Inserts seed entries
      return knex('schools').insert([{"schoolID":1,"school_name":"American Nailwort","location":"Manghit"},
      {"schoolID":2,"school_name":"Lady's Tresses","location":"Carromeu"},
      {"schoolID":3,"school_name":"Bailey's Buckwheat","location":"Zhdanov"},
      {"schoolID":4,"school_name":"Western Yellowcress","location":"Xuebu"},
      {"schoolID":5,"school_name":"Scadoxus","location":"Al Manqaf"},
      {"schoolID":6,"school_name":"Brachelyma Moss","location":"Novosemeykino"},
      {"schoolID":7,"school_name":"Egg Milkvetch","location":"Konārak"},
      {"schoolID":8,"school_name":"Matted Spikerush","location":"Chengtou"},
      {"schoolID":9,"school_name":"Didymodon Moss","location":"Wushan"},
      {"schoolID":10,"school_name":"Curveleaf Hypnum Moss","location":"Voždovac"},
      {"schoolID":11,"school_name":"Large Hawai'i Lovegrass","location":"Manukaka"},
      {"schoolID":12,"school_name":"Malibu Baccharis","location":"Buraen"},
      {"schoolID":13,"school_name":"Tacky Phacelia","location":"Al ‘Awjah"},
      {"schoolID":14,"school_name":"Manyflower Beardtongue","location":"Dongjiao"},
      {"schoolID":15,"school_name":"Goldenrod","location":"San Mariano"},
      {"schoolID":16,"school_name":"Orange Coneflower","location":"Gangkou"},
      {"schoolID":17,"school_name":"Marshweed","location":"Novaya Tavolzhanka"},
      {"schoolID":18,"school_name":"Nelson's Tansymustard","location":"Luau"},
      {"schoolID":19,"school_name":"Fringed Grass Of Parnassus","location":"Konin"},
      {"schoolID":20,"school_name":"Wild Comfrey","location":"Barda"},
      {"schoolID":21,"school_name":"Tall Brome","location":"Ermelo"},
      {"schoolID":22,"school_name":"Wart Lichen","location":"Akron"},
      {"schoolID":23,"school_name":"Laguna Beach Liveforever","location":"Mont-Joli"},
      {"schoolID":24,"school_name":"Spidergrass","location":"Op"},
      {"schoolID":25,"school_name":"Crabseye Lichen","location":"Zongzhai"},
      {"schoolID":26,"school_name":"Largeleaf Marshpennywort","location":"Wailebe"},
      {"schoolID":27,"school_name":"Rabbitbrush","location":"Shyroke"},
      {"schoolID":28,"school_name":"Fuscidea Lichen","location":"Suure-Jaani"},
      {"schoolID":29,"school_name":"Matrimony Vine","location":"Chigoré"},
      {"schoolID":30,"school_name":"Rollins' Twinpod","location":"Columbus"}]);
    });
};
