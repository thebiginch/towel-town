app.factory('AdminFactory', function ($http) {
  var AdminFactory = {};

  AdminFactory.types = ['Beach', 'Bath', 'Face', 'Washcloth', 'Golf', 'Gym', 'Dish', 'Hot Towel', 'Bar'];

  AdminFactory.materials = ['MicroFibre', 'MacroFibre', 'Egyptian Cotton', 'Terry Cloth', 'Bamboo', 'Linen', 'Silk', 'Pima Cotton', 'Baby Alpaca'];

  AdminFactory.colors = ['Fushia', 'Seaspray Green', 'Coral', 'Eggshell White', 'Yolk Yellow', 'Purple Rain', 'Burgandy (Ron)'];

  AdminFactory.createTowel = function (newTowel) {
    var newTowel = {
      type: newTowel.type,
      material: newTowel.material,
      color: newTowel.color,
      description: newTowel.description,
      absorption: newTowel.absorption,
      price: newTowel.price,
      stock: newTowel.stock,
      threadcount: newTowel.threadcount,
      towelTech: newTowel.towelTech,
      softness: newTowel.softness
    };

    return $http.post('/api/towels', newTowel)
    .then(function (res) {
      return res.data;
    });

  }

  return AdminFactory;
})