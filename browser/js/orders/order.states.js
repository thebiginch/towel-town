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
	.state('profile.singleOrder', {
           url: '/order/:orderId',
           template: '<user-order order="order"></user-order>',
           controller: 'singleOrderCtrl',
           resolve: {
               theOrder: function($stateParams, OrderFactory) {
                   return OrderFactory.fetchOne($stateParams.orderId)
                   .then(function(order){
                    return order;
                   });
               }
           }
       });


});
