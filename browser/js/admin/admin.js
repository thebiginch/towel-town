app.config(function ($stateProvider) {

  $stateProvider.state('admin', {
    url: '/admin',
    templateUrl: 'js/admin/admin.html'
    // controller: 'AdminCtrl'
  })
  .state('admin.create', {
    url:'/create',
    templateUrl: 'js/admin/admin-create.html',
    controller: 'AdminCtrl'
  });

});

app.controller('AdminCtrl', function ($scope, AdminFactory, $state) {
  $scope.types = AdminFactory.types;
  $scope.colors = AdminFactory.colors;
  $scope.materials = AdminFactory.materials;

  $scope.createTowel = function (newTowel) {

    AdminFactory.createTowel(newTowel)
    .then(function () {
      $state.go('allTowels');
    });
    
  }
})