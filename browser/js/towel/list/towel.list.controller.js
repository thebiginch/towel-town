app.controller('allTowelController', function($scope, TowelFactory, allTowels) {
    $scope.towels = allTowels;

    $scope.towelOptions = {
    	type: ['Beach','Bath','Gym','Face'],
    	color: ['Fushia','Coral'],
    	material: ['Pima Cotton','Bamboo','MacroFibre']
    };

    $scope.filtered = function(){
        if (Object.keys($scope.filters).length == 0) return this.towels;

        var x = this.towels.filter(function(towel){
            var match = false;
            for(var cat in $scope.filters){
                for(var opt in $scope.filters[cat]){
                    if (towel[cat] == opt && $scope.filters[cat][opt]) return true;
                }
            }
            return match;
        });

        return x;
    }

    $scope.filteredOptions = {};

    $scope.filters = {};

    $scope.toggle = function(category){
        $scope.filteredOptions[category] = !$scope.filteredOptions[category];
    
        if(!$scope.filteredOptions[category]) delete $scope.filters[category];
    };

});

