app.directive('cart', function(CartFactory, $state) {
	return {
		restrict: 'E',
		scope: {
			myItems: '='
		},
		templateUrl: 'js/cart/shoppingCart.html',
		link: function(scope, element, attr) {
			scope.addToCart = CartFactory.addToCart;
			scope.removeItem = CartFactory.removeItem;
			scope.cartState = $state.current.name === 'shoppingCart';
			console.log(cartState);
		}
	}
});