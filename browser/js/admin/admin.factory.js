app.factory('AdminFactory', function ($http, $state) {
  var AdminFactory = {};

  var getData = function (res) {return res.data};

  AdminFactory.getAllUsers = function () {
    return $http.get('/api/users')
    .then(getData);
  }

  AdminFactory.makeAdmin = function (user, id) {
    user.isAdmin = true;
    return $http.put('/api/users/' + id, user)
    .then(getData);
  }

  AdminFactory.deleteUser = function (id) {
    return $http.delete('/api/users/' + id)
    .then(getData);
  }

  AdminFactory.passwordReset = function (user, id) {
    user.password_reset = true;
    return $http.put('/api/users/' + id, user)
    .then(getData);
  }

  AdminFactory.passwordUpdate = function (id, user) {
    user.password_reset = false;
    return $http.put('/api/users/' + id, user)
    .then(getData)
    .then(function() {
      $state.go('allTowels');
    });
  }

  AdminFactory.types = ['Beach', 'Bath', 'Face', 'Washcloth', 'Golf', 'Gym', 'Dish', 'Hot Towel', 'Bar'];

  AdminFactory.materials = ['MicroFibre', 'MacroFibre', 'Egyptian Cotton', 'Terry Cloth', 'Bamboo', 'Linen', 'Silk', 'Pima Cotton', 'Baby Alpaca'];

  AdminFactory.colors = ['Fushia', 'Seaspray Green', 'Coral', 'Eggshell White', 'Yolk Yellow', 'Purple Rain', 'Burgandy (Ron)'];

  AdminFactory.createTowel = function (newTowel) {
    if (!newTowel.towelTech) {
      newTowel.towelTech = [];
    }

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
    .then(getData);

  }

  return AdminFactory;
})