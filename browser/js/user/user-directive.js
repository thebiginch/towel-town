app.config(function($stateProvider) {

    $stateProvider.state('profile', {
        url: '/tacos',
        templateUrl: 'js/user/user.html',
        controller: 'UserController',
    })
    .state('profile.default', {
        url: '/profile',
        templateUrl: 'js/user/user-home.html',
        controller: 'UserController'
    })
    .state('profile.orders', {
        url: '/orders/:userId',
        templateUrl: 'js/user/user-orders.html',
        controller: 'UserOrdersController',
        resolve : {
            userOrders: function($stateParams,UserFactory,Session) {
                return UserFactory.fetchUserOrders(Session.user.id);
            }
        }
    })
    .state('profile.reviews', {
        url: '/reviews',
        templateUrl: 'js/user/user-reviews.html',
        controller: 'UserReviewsController',
        resolve : {
            userReviews: function($stateParams, UserFactory,Session) {
                return UserFactory.fetchUserReviews(Session.user.id);
            }
        }
    });

});

// THIS IS BROKEN??
app.factory('UserFactory', function($http,Session) {
    
    var UserFactory = {};

    var getData = function(res) { return res.data };

    UserFactory.fetchOne = function(id) {
        return $http.get('/api/users/'+id)
        .then(getData);
    };

    UserFactory.fetchUserOrders = function(id) {
        return $http.get('/api/orders/order/' + id)
        .then(getData);
    };

    UserFactory.fetchUserReviews = function(id) {
        return $http.get('/api/reviews/users/' + id)
        .then(getData);
    };

    return UserFactory;
});

app.controller('UserController', function($scope, UserFactory,Session) {
    $scope.user = Session.user;
}).controller('UserOrdersController', function($scope,userOrders) {
    $scope.userOrders = userOrders;
}).controller('UserReviewsController', function($scope,userReviews) {
    $scope.userReviews = userReviews;
});
