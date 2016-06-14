'use strict';

app.directive('userOrder', function() {
	return {
		restrict: 'E',
		scope: {
			order: '='
		},
		templateUrl: '/js/orders/order.html'
	}
})