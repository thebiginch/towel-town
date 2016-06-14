app.config(function($stateProvider) {

    $stateProvider.state('profile', {
        url: '/user',
        templateUrl: 'js/user/user.html',
        controller: 'UserController'
    })
    .state('profile.default', {
        url: '/profile',
        templateUrl: 'js/user/user-home.html'
    })
    .state('profile.orders', {
        url: '/orders',
        templateUrl: 'js/user/user-orders.html'
    })  
    .state('profile.reviews', {
        url: '/reviews',
        templateUrl: 'js/user/user-reviews.html'
    })
    .state('profile.singleOrder', {
        url: '/:orderId',
        template: '<user-order order="order"></user-order>',
        controller: 'singleOrderCtrl'

        /* function($scope, $stateParams) {
            console.log($scope)
            temp = temp.filter(function(o){
                return o.id === $stateParams.orderId;
            });
            $scope.order = temp[0];
        }*/
    })

});

app.controller('singleOrderCtrl',function($scope, $stateParams){
    $scope.orders = $scope.$parent.user.orders;
    var temp = $scope.orders.filter(function(o) {

        return o.id == $stateParams.orderId;
    });
    console.dir(temp[0])
    $scope.order = temp[0];
});

app.factory('UserFactory', function($http,Session) {
    
    var UserFactory = {};

    var getData = function(res) { return res.data };

    UserFactory.fetchOne = function(id) {
        return $http.get(`/api/users/${id}`)
        .then(getData);
    };

    UserFactory.fetchUserOrders = function(id) {
        return $http.get(`/api/users/${id}/orders`)
        .then(getData);
    };

    UserFactory.fetchUserReviews = function(id) {
        return $http.get(`/api/users/${id}/reviews`)
        .then(getData);
    };

    return UserFactory;
});

app.controller('UserController', function($scope, UserFactory,Session) {
    UserFactory.fetchOne(Session.user.id).then(function(user){
        $scope.user = user;
    })
})