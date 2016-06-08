app.config(function($stateProvider) {

    $stateProvider.state('user', {
        url: '/users/:userId',
        templateUrl: 'js/user/user.html',
        controller: 'UserController',
        resolve: {
            user: function($stateParams, UserFactory) {
                return UserFactory.fetchOne($stateParams.userId);
            }
        }
    });

});

// THIS IS BROKEN
app.factory('UserFactory', function($http) {
    
    var UserFactory = {};

    var getData = function(res) { return res.data };

    UserFactory.fetchOne = function(id) {
        return $http.get('/api/users/' + id).then(getData);
    }

    return UserFactory;
});

app.controller('UserController', function($scope, UserFactory, user) {
    $scope.user = user;
});
