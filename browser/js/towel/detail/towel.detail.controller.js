app.controller('singleTowelController', function($scope, TowelFactory, theTowel, reviews, $state) {
    $scope.towel = theTowel;
    $scope.reviews = reviews;
    $scope.props = TowelFactory.getProps(theTowel);

    $scope.addReview = function (review, id) {
      TowelFactory.addReview(review, id)
      .then(function () {
        $state.go($state.current, {}, {reload: true});
      });
    }
});