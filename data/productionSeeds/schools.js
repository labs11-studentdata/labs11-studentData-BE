
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('schools').del()
    .then(function () {
      // Inserts seed entries
      return knex('schools').insert([
      {"school_name":"American Nailwort","location":"Manghit"},
      {"school_name":"Lady's Tresses","location":"Carromeu"},
      {"school_name":"Bailey's Buckwheat","location":"Zhdanov"},
      {"school_name":"Western Yellowcress","location":"Xuebu"},
      {"school_name":"Scadoxus","location":"Al Manqaf"},
      {"school_name":"Brachelyma Moss","location":"Novosemeykino"},
      {"school_name":"Egg Milkvetch","location":"Konārak"},
      {"school_name":"Matted Spikerush","location":"Chengtou"},
      {"school_name":"Didymodon Moss","location":"Wushan"},
      {"school_name":"Curveleaf Hypnum Moss","location":"Voždovac"},
      {"school_name":"Large Hawai'i Lovegrass","location":"Manukaka"},
      {"school_name":"Malibu Baccharis","location":"Buraen"},
      {"school_name":"Tacky Phacelia","location":"Al ‘Awjah"},
      {"school_name":"Manyflower Beardtongue","location":"Dongjiao"},
      {"school_name":"Goldenrod","location":"San Mariano"},
      {"school_name":"Orange Coneflower","location":"Gangkou"},
      {"school_name":"Marshweed","location":"Novaya Tavolzhanka"},
      {"school_name":"Nelson's Tansymustard","location":"Luau"},
      {"school_name":"Fringed Grass Of Parnassus","location":"Konin"},
      {"school_name":"Wild Comfrey","location":"Barda"},
      {"school_name":"Tall Brome","location":"Ermelo"},
      {"school_name":"Wart Lichen","location":"Akron"},
      {"school_name":"Laguna Beach Liveforever","location":"Mont-Joli"},
      {"school_name":"Spidergrass","location":"Op"},
      {"school_name":"Crabseye Lichen","location":"Zongzhai"},
      {"school_name":"Largeleaf Marshpennywort","location":"Wailebe"},
      {"school_name":"Rabbitbrush","location":"Shyroke"},
      {"school_name":"Fuscidea Lichen","location":"Suure-Jaani"},
      {"school_name":"Matrimony Vine","location":"Chigoré"},
      {"school_name":"Rollins' Twinpod","location":"Columbus"}]);
    });
};
