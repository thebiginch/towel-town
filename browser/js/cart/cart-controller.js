app.controller('myCartController',function($scope, CartFactory){

	// Scope Functionality
	$scope.clearCart = CartFactory.clearCart;
	$scope.totalQuant = CartFactory.totalQuant;

	// Scope Variables
	$scope.cartEmpty = $scope.totalQuant === 0;
});