app.controller('singleTowelController', function($scope, TowelFactory, theTowel, reviews, $state) {
    $scope.towel = theTowel;
    $scope.reviews = reviews;

    $scope.addReview = TowelFactory.addReview
});