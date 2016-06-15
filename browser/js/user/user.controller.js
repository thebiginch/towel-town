app.controller('UserController', function($scope, UserFactory, Session, TowelFactory) {
    UserFactory.fetchOne(Session.user.id).then(function(user){
        $scope.user = user;
    });

    // Scope Functions
    $scope.genArr = TowelFactory.genArr;
})