'use strict';

app.directive('userOrder', function() {
	return {
		restrict: 'E',
		scope: {
			order: '='
		},
		templateUrl: '/js/orders/order.html',
		link: function(scope,element,attr){
			
			var orderItems = scope.order.orderItems;
			var itemSubtotals = orderItems.map(function(elem) {
				return elem.price * elem.quantity;
			})
			var grandTotal = itemSubtotals.reduce(function(p,c) {
				return p + c;
			});

			scope.total = grandTotal;
	
			scope.shipping = 'Free';
		}
	}
})