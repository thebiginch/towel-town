 app.directive('towel', function() {
    return {
        restrict: 'E',
        scope: {
            theTowel: "="
        },
        templateUrl: 'js/towels/towel.html',
        link: function(scope, element, attr) {

        },
    };
});

app.config(function($stateProvider) {

    $stateProvider.state('allTowels', {
        url: '/towels',
        templateUrl: 'js/towels/all-towels.html',
        controller: 'allTowelController',
        resolve: {
            allTowels: function(TowelFactory) {
                return TowelFactory.fetchAll();
            }
        }
    });

    $stateProvider.state('towel', {
        //foobar
        url: '/towels/:towelId',
        //template: '<h1>You found the single towel page</h1>',
        templateUrl: 'js/towels/single-towel.html',
        controller: 'singleTowelController',
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
