app.config(function ($stateProvider) {

  $stateProvider.state('admin', {
    url: '/admin',
    templateUrl: 'js/admin/admin.html',
    resolve: {
      users: function (AdminFactory) {
        return AdminFactory.getAllUsers();
      },
      orders: function (AdminFactory) {
        return AdminFactory.getAllOrders();
      }
    }
  })
  .state('admin.create', {
    url:'/create',
    templateUrl: 'js/admin/admin-create.html',
    controller: 'AdminCtrl'
  })
  .state('admin.users', {
    url: '/usercontrol',
    templateUrl: 'js/admin/admin-users.html',
    controller: 'AdminCtrl'
  })
  .state('admin.orders', {
    url: '/orders',
    templateUrl: 'js/admin/admin-orders.html',
    controller: 'AdminCtrl'
  });
});

app.controller('AdminCtrl', function ($scope, AdminFactory, $state, users, orders) {
  $scope.types = AdminFactory.types;
  $scope.colors = AdminFactory.colors;
  $scope.materials = AdminFactory.materials;
  $scope.users = users;
  $scope.orders = orders;

  var refreshState = function () {
    $state.go($state.current, {}, {reload: true});
  }

  $scope.passwordReset = function (user, id) {

    AdminFactory.passwordReset(user, id)
    .then(refreshState);

  }

  $scope.makeAdmin = function (user, id) {

    AdminFactory.makeAdmin(user, id)
    .then(refreshState);

  }

  $scope.deleteUser = function (id) {

    AdminFactory.deleteUser(id)
    .then(refreshState);  

  }

  $scope.createTowel = function (newTowel) {

    AdminFactory.createTowel(newTowel)
    .then(function () {
      $state.go('allTowels');
    });
    
  }
})