app.directive('towelRating', function(TowelFactory) {
	return {
		restrict: 'E',
		templateUrl: 'js/towel/rating.directive.html',
		scope: {
			towel: '='
		},
		link: function(scope, element, attr) {
			scope.genArr = TowelFactory.genArr;
		}
	}
});