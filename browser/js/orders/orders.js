app.controller('OrderController', function($scope) {

});

// Template FOR NOW -- MAKE SURE TO DELETE
// app.directive('orders', function() {
// 	return {
// 		restrict: 'E',
// 		templateUrl: '/js/orders/orders.html'
// 	}
// });

app.config(function($stateProvider) {

	$stateProvider

	.state('checkoutSumm', {
			url: '/checkout-summary',
			templateUrl: '/js/orders/orders.html',
			controller: 'OrderController'
	});

});