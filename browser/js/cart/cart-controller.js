app.controller('myCartController',function($scope, CartFactory){

	// Scope Functionality
	$scope.clearCart = CartFactory.clearCart;
	$scope.totalQuant = CartFactory.totalQuant;
	$scope.myItems = CartFactory.getCart();
});