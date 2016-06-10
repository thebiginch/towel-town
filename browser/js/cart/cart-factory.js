app.factory('CartFactory', function(localStorageService) {

	var CartFactory = {};

	// DEBUGGING ONLY
	CartFactory.showCart = function() {
		console.dir(CartFactory.getCart());
	}

	CartFactory.addToCart = function(towel, func) {
		var cart = CartFactory.getCart() || {};
		var item = cart[towel.id];

		if (item) {
			item.quantity++;
		} else {
			item = towel;
			item.quantity = 1;
		}
		cart[towel.id] = item;
		func();

		return localStorageService.set('cart', cart);
	};

	CartFactory.removeItem = function(towel, func) {
		var cart = CartFactory.getCart() || {};

		if (cart[towel.id].quantity === 1) {
			delete cart[towel.id];
		} else {
			cart[towel.id].quantity--;
		}
		func();

		if (Object.keys(cart).length) {
			return localStorageService.set('cart', cart);
		} else {
			return CartFactory.clearCart();
		}
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

	return CartFactory;	
});