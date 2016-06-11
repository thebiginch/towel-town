app.controller('singleTowelController', function($scope, TowelFactory, theTowel, reviews, $state) {
	// Model gets on view
    $scope.towel = theTowel;
    $scope.reviews = reviews;

    // Determinant scope variables
    $scope.props = TowelFactory.getProps(theTowel);
    $scope.reviewError = null;

    $scope.addReview = function (review, id) {

      TowelFactory.addReview(review, id)
      .then(function () {
        $state.go($state.current, {}, {reload: true});
      })
      .catch(function () {
        $scope.reviewError = 'You must be logged in to write a review.'
      });
      
    }
});