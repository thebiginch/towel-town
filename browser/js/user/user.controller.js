app.controller('UserController', function($scope, UserFactory, Session, TowelFactory) {
    UserFactory.fetchOne(Session.user.id).then(function(user){
    	var updatingReviewsWithTowels = user.reviews.map(function(review) {
    		return TowelFactory.fetchOne(review.towelId)
    		.then(function(towel) {
    			review.towelName = towel.name;
    			return review;
    		});
    	});

    	Promise.all(updatingReviewsWithTowels)
    	.then(function(reviews) {
    		user.reviews = reviews;
    		$scope.user = user;
    	});
    });

    // Scope Functions
    $scope.genArr = TowelFactory.genArr;
})