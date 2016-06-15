app.factory('OrderFactory',function($http){

    var OrderFactory = {};

    var getData = function(res) { return res.data };

    OrderFactory.fetchOne = function(id) {
        return $http.get(`/api/orders/${id}`)
        .then(getData);
    };
    return OrderFactory;
});

app.controller('singleOrderCtrl',function($scope, $stateParams,OrderFactory,theOrder){
    $scope.order = theOrder[0];
});

app.controller('UserController', function($scope, UserFactory,Session) {
    UserFactory.fetchOne(Session.user.id).then(function(user){
        $scope.user = user;
    });
});