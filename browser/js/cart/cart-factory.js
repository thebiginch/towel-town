app.factory('CartFactory', function(localStorageService, $state) {

	var CartFactory = {};

	// DEBUGGING ONLY

	function refresh() {
		$state.go($state.current, {}, {reload: true});
	}

	CartFactory.showCart = function() {
		console.dir(CartFactory.getCart());
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
		refresh();
	}

	CartFactory.getCart = function() {
		return localStorageService.get('cart');
	}

	CartFactory.clearCart = function() {
		return localStorageService.remove('cart');
	}

	CartFactory.submitOrder = function() {
		return $http.put('/api/orders')
		.then()
	}

	CartFactory.getQuantity = function(towel) {
		var cart = CartFactory.getCart();

		return cart[towel.id].quantity;
	}

	return CartFactory;	
});