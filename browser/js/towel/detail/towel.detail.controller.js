app.controller('singleTowelController', function($scope, TowelFactory, theTowel, reviews) {
    $scope.towel = theTowel;
    $scope.reviews = reviews;
});