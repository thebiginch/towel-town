app.controller('OrderController', function($scope) {

});

app.config(function($stateProvider) {

	$stateProvider

	.state('checkoutSumm', {
			url: '/checkout-summary',
			templateUrl: '/js/orders/orders.html',
			controller: 'OrderController'
	})

	.state('orderSuccess', {
		url: 'checkout/success',
		templateUrl: '/js/orders/ordersuccess.html'
	})

});
