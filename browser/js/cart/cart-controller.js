app.factory('CartFactory', function(localStorageService) {

	var CartFactory = {};

	// DEBUGGING ONLY
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
		return localStorageService.set('cart', cart);
	};

	CartFactory.removeItem = function(towel) {
		var cart = CartFactory.getCart() || {};
		var item = cart[towel.id];

		if (item.quantity === 1) {
			delete cart[towel.id];
		} else {
			cart[towel.id].quantity--;
		}
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

	return CartFactory;	
});

app.config(function($stateProvider){

	$stateProvider.state('shoppingCart',{
		url: '/shoppingCart',
		templateUrl: '/js/cart/shoppingCart.html',
		controller: 'myCartController'
	});
});

app.controller('myCartController',function($scope, CartFactory){
	$scope.myItems = CartFactory.getCart();

	// DEBUGGING ONLY
	$scope.showCart = CartFactory.showCart;

	$scope.clearCart = CartFactory.clearCart;
	$scope.removeItem = CartFactory.removeItem;
	$scope.getCart = CartFactory.getCart;
});