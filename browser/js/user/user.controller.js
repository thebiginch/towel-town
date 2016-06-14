app.controller('UserController', function($scope, UserFactory,Session) {
    UserFactory.fetchOne(Session.user.id).then(function(user){
        $scope.user = user;
    })
})