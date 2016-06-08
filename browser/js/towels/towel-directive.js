 // app.directive('towel', function() {
//     return {
//         restrict: 'E',
//         scope: {
//             productId: "="
//         },
//         templateUrl: 'js/towels/towel.html',
//         link: function(scope, element, attr) {

//         },
//     };
// });

app.config(function($stateProvider) {

    $stateProvider.state('allTowels', {
        url: '/towels',
        templateUrl: 'js/towels/all-towels.html',
        controller: 'allTowelController',
        resolve: {
            allTowels: function($stateParams, TowelFactory) {
                return TowelFactory.fetchAll($stateParams.towelId);
            }
        }
    });

    $stateProvider.state('towel', {
        //foobar
        url: 'towels/:towelId',
        templateUrl: 'js/towels/one-towel',
        resolve: {
            theTowel: function($stateParams, TowelFactory) {
                return TowelFactory.fetchOne($stateParams.towelId);
            }
        }
    });
});

app.factory('TowelFactory', function($http) {

    var TowelFactory = {};

    var getData = function(res) {return res.data};

    TowelFactory.fetchAll = function() {
        return $http.get('/api/towels')
            .then(getData);
    };

    TowelFactory.fetchOne = function(id) {
        return $http.get('/api/towels/' + id)
            .then(getData);
    };
    return TowelFactory;
})

app.controller('allTowelController', function($scope, TowelFactory, allTowels) {
    $scope.towels = allTowels;
});

app.controller('singleTowelController', function($scope, TowelFactory, theTowel) {
    $scope.towel = theTowel;
});
