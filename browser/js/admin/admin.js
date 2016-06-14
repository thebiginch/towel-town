app.config(function ($stateProvider) {

  $stateProvider.state('admin', {
    url: '/admin',
    templateUrl: 'js/admin/admin.html'
  })
  .state('admin.create', {
    url:'/create',
    templateUrl: 'js/admin/admin-create.html',
    controller: 'AdminCtrl'
  })
  .state('admin.users', {
    url: '/usercontrol',
    templateUrl: 'js/admin/admin-users.html',
    controller: 'AdminCtrl',
    resolve: {
      users: function (AdminFactory) {
        return AdminFactory.getAllUsers();
      }
    }
  });

});

app.controller('AdminCtrl', function ($scope, AdminFactory, $state, users) {
  $scope.types = AdminFactory.types;
  $scope.colors = AdminFactory.colors;
  $scope.materials = AdminFactory.materials;

  var refreshState = function () {
    $state.go($state.current, {}, {reload: true});
  }

  $scope.users = users;

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