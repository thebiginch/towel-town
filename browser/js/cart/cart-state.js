app.config(function($stateProvider){

	$stateProvider.state('shoppingCart',{
		url: '/shoppingCart',
		templateUrl: '/js/cart/shoppingCart.html',
		controller: 'myCartController'
	});
});