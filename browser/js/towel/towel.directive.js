app.directive('towel', function() {
    return {
        restrict: 'E',
        scope: {
            theTowel: "="
        },
        templateUrl: 'js/towel/towel.directive.html',
        link: function(scope, element, attr) {
        },
    };
});