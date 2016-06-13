app.controller('myCartController',function($scope, CartFactory){
	// Scope Variables
	$scope.myItems = CartFactory.getCart();
	console.log($scope.myItems);
	$scope.totalQuant = CartFactory.totalQuant;
	$scope.totalCost = CartFactory.totalCost;

	// Scope Determinant Variables
	$scope.cartEmpty = $scope.totalQuant === 0;

	// Scope Functions
	$scope.getCart = CartFactory.getCart;
	$scope.addToCart = CartFactory.addToCart;
	$scope.removeItem = CartFactory.removeItem;
	$scope.clearCart = CartFactory.clearCart;
});