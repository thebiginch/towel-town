app.controller('myCartController',function($scope, $state, CartFactory){
	$scope.myItems = CartFactory.getCart();

	// DEBUGGING ONLY
	$scope.showCart = CartFactory.showCart;

	$scope.clearCart = CartFactory.clearCart;
	$scope.removeItem = CartFactory.removeItem;
	$scope.getCart = CartFactory.getCart;
});