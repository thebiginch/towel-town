app.directive('billShipInfo', function($state, CartFactory) {
	return {
		restrict: 'E',
		templateUrl: '/js/orders/bill-ship-info.directive.html',
		link: function(scope, element, attr) {
			scope.submitOrder = CartFactory.submitOrder;
			scope.myItems = CartFactory.getCart();
		}
	}
});