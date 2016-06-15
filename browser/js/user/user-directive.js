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
        url: '/order/:orderId',
        template: '<user-order order="order"></user-order>',
        controller: 'singleOrderCtrl',
        resolve: {
            theOrder: function($stateParams,OrderFactory){
                return OrderFactory.fetchOne($stateParams.orderId);
            }
        }
    });
});

app.controller('singleOrderCtrl',function($scope, $stateParams,OrderFactory,theOrder){
    $scope.order = theOrder[0];
});

app.factory('OrderFactory',function($http){
    
    var getData = function(res) { return res.data };
    var OrderFactory = {};

    OrderFactory.fetchOne = function(id) {
        return $http.get(`/api/orders/${id}`)
        .then(getData);
    };
    return OrderFactory;
});

app.controller('UserController', function($scope, UserFactory,Session) {
    UserFactory.fetchOne(Session.user.id).then(function(user){
        $scope.user = user;
    });
});
