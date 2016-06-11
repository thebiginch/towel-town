app.directive('towel',function(CartFactory, $state, localStorageService) {
    return {
        restrict: 'E',
        scope: {
            theTowel: "="
        },
        templateUrl: 'js/towel/towel.directive.html',
        link: function(scope, element, attr) {
        	scope.addToCart = CartFactory.addToCart;
            scope.removeItem = CartFactory.removeItem;
        },
    };
});