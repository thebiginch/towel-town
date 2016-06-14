app.config(function($stateProvider) {

    $stateProvider.state('profile', {
        url: '/user',
        templateUrl: 'js/user/user.html',
        controller: 'UserController',
    })
    .state('profile.default', {
        url: '/profile',
        templateUrl: 'js/user/user-home.html',
        controller: 'UserController'
    })
    .state('profile.orders', {
        url: '/orders',
        templateUrl: 'js/user/user-orders.html',
        controller: 'UserController'
    })
    .state('profile.reviews', {
        url: '/reviews',
        templateUrl: 'js/user/user-reviews.html',
        controller: 'UserController',
    });

});