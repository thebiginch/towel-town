app.factory('CartFactory', function(localStorageService, $state, $http) {

	var CartFactory = {};

	CartFactory.totalQuant = getTotal('quantity');
	CartFactory.totalCost = getTotal('quantity', 'price');

	function refresh() {
		$state.go($state.current, {}, {reload: true});
	}

	function getTotal() {
		var cart = localStorageService.get('cart');
		var args = [].slice.call(arguments);
		var sum = 0;

		for (var key in cart) {
			var thisKey = cart[key];
			var thisVal = args.length > 1 ? args.reduce(function(p,c) {
				var a = p ? thisKey[p] : 1;
				var b = c ? thisKey[c] : 1;
				return a * b;
			}) : thisKey[args[0]];
			sum += thisVal;
		}
		return sum;
	}

	CartFactory.addToCart = function(towel) {
		var cart = CartFactory.getCart() || {};
		var item = cart[towel.id];

		if (item) {
			item.quantity++;
		} else {
			item = towel;
			item.quantity = 1;
		}
		cart[towel.id] = item;

		localStorageService.set('cart', cart);
		CartFactory.totalQuant++;
		CartFactory.totalCost += towel.price;
		refresh();
	};

	CartFactory.removeItem = function(towel) {
		var cart = CartFactory.getCart() || {};

		if (cart[towel.id].quantity === 1) {
			delete cart[towel.id];
		} else {
			cart[towel.id].quantity--;
		}

		if (Object.keys(cart).length) {
			localStorageService.set('cart', cart);
		} else {
			return CartFactory.clearCart();
		}
		CartFactory.totalQuant--;
		CartFactory.totalCost -= towel.price;
		refresh();
	}

	CartFactory.getCart = function() {
		return localStorageService.get('cart');
	}

	CartFactory.clearCart = function() {
		localStorageService.remove('cart');
		CartFactory.totalQuant = 0;
		CartFactory.totalCost = 0;
		refresh();
	}

	CartFactory.submitOrder = function(cartOrder) {
		cartOrder.items = CartFactory.getCart();
		// return $http.post('/api/orders', cartOrder)
		// .then(function(order) {

			// DEBUGGING ONLY
			console.log('Order Success: ', cartOrder);
			$state.go('orderSuccess');
		// });
	}

	CartFactory.getQuantity = function(towel) {
		var cart = CartFactory.getCart();

		return cart[towel.id].quantity;
	}

	return CartFactory;	
});