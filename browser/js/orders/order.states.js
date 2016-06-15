app.config(function($stateProvider) {

	$stateProvider

	.state('checkoutSumm', {
			url: '/checkout-summary',
			templateUrl: '/js/orders/orders.html'
	})

	.state('orderSuccess', {
		url: 'checkout/success',
		templateUrl: '/js/orders/ordersuccess.html'
	})
});
