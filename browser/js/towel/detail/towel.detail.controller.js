app.controller('singleTowelController', function($scope, TowelFactory, CartFactory, theTowel, reviews, $state, Session) {
    // Model gets on view
    $scope.towel = theTowel;
    $scope.reviews = reviews;
    $scope.Session = Session;

    // Determinant scope variables
    $scope.props = TowelFactory.getProps(theTowel);

    // Scope functions
    $scope.genArr = TowelFactory.genArr;
    $scope.addReview = function (review, id) {

      TowelFactory.addReview(review, id)
      .then(function () {
        $state.go($state.current, {}, {reload: true});
      });
      
    };
    $scope.addToCart = CartFactory.addToCart;
});