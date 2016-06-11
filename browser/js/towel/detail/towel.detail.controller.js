app.controller('singleTowelController', function($scope, TowelFactory, theTowel, reviews, $state, Session) {
	// Model gets on view
    $scope.towel = theTowel;
    $scope.reviews = reviews;
    $scope.Session = Session;

    // Determinant scope variables
    $scope.props = TowelFactory.getProps(theTowel);

    $scope.addReview = function (review, id) {

      TowelFactory.addReview(review, id)
      .then(function () {
        $state.go($state.current, {}, {reload: true});
      });
      
    }
});