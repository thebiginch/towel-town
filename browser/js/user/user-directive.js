app.config(function($stateProvider) {

    // $stateProvider.state('user', {
    //     url: '/users/:userId',
    //     templateUrl: 'js/user/user.html',
    //     controller: 'UserController',
    //     resolve: {
    //         user: function($stateParams, UserFactory) {
    //             return UserFactory.fetchOne($stateParams.userId);
    //         }
    //     }
    // });

    $stateProvider.state('profile', {
        url: '/tacos',
        templateUrl: 'js/user/user.html',
        controller: 'UserController',
    });

    $stateProvider.state('profile.default', {
        url: '/profile',
        templateUrl: 'js/user/user-home.html',
        controller: 'UserController'

    });

    $stateProvider.state('profile.orders', {
        url: '/orders/:userId',
        templateUrl: 'js/user/user-orders.html',
        controller: 'UserOrdersController',
        resolve : {
            userOrders: function($stateParams, UserFactory,Session) {
                return UserFactory.fetchUserOrders(Session.user.id);
            }
        }

    });

    $stateProvider.state('profile.reviews', {
        url: '/reviews',
        templateUrl: 'js/user/user-reviews.html',
        controller: 'UserController'
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

    UserFactory.isLoggedIn = function(){
        return $http.get('/session')
        .then(getData)
    };

    UserFactory.fetchUserOrders = function(id) {
        return $http.post('/api/orders/orderByUser', {userId: id})
        .then(getData);
    };

    UserFactory.fetchUserReviews = function(id) {
        return $http.post('/api/orders/orderByUser', {userId: id})
        .then(getData);
    };

    return UserFactory;
});

app.controller('UserController', function($scope, UserFactory,Session) {
    $scope.user = Session.user;
});

app.controller('UserOrdersController', function($scope,userOrders) {
    $scope.userOrders = userOrders;
});

app.controller('UserReviewsController', function($scope,userReviews) {
    $scope.userReviews = userReviews;
});
