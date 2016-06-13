app.factory('AdminFactory', function () {
 var AdminFactory = {};

 AdminFactory.types = ['Beach', 'Bath', 'Face', 'Washcloth', 'Golf', 'Gym', 'Dish', 'Hot Towel', 'Bar'];

 AdminFactory.materials = ['MicroFibre', 'MacroFibre', 'Egyptian Cotton', 'Terry Cloth', 'Bamboo', 'Linen', 'Silk', 'Pima Cotton', 'Baby Alpaca'];

 AdminFactory.colors = ['Fushia', 'Seaspray Green', 'Coral', 'Eggshell White', 'Yolk Yellow', 'Purple Rain', 'Burgandy (Ron)'];

 return AdminFactory;

})