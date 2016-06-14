app.directive('cart', function(CartFactory, $state) {
	return {
		restrict: 'E',
		// scope: {
		// 	myItems: '=',
		// },
		templateUrl: 'js/cart/cart.directive.html',
		link: function(scope, element, attr) {
			// Scope Functions
			scope.addToCart = CartFactory.addToCart;
			scope.removeItem = CartFactory.removeItem;
			scope.totalQuant = CartFactory.totalQuant;
			scope.totalCost = CartFactory.totalCost;

			// Scope Variables
			scope.showImg = $state.current.name === 'shoppingCart';
			scope.state = $state.current.name;
			scope.myItems = CartFactory.getCart();
		}
	}
});