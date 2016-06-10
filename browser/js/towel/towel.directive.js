app.directive('towel',function(CartFactory, $state, localStorageService) {
    return {
        restrict: 'E',
        scope: {
            myItems: "="
        },
        templateUrl: 'js/towel/towel.directive.html',
        link: function(scope, element, attr) {
        	scope.addToCart = CartFactory.addToCart;
            scope.removeItem = CartFactory.removeItem;
        	scope.cartState = $state.current.name === 'shoppingCart';
        },
    };
});