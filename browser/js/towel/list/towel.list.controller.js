app.controller('allTowelController', function($scope, TowelFactory, allTowels, AdminFactory) {
    $scope.towels = allTowels;

    $scope.towelOptions = {
    	type: AdminFactory.types,
    	color: AdminFactory.colors,
    	material: AdminFactory.materials
    };

    $scope.filtered = function(){
        if (Object.keys($scope.taco).length == 0) return this.towels;

        var x = this.towels.filter(function(towel){
            var match = false;
            for(var cat in $scope.taco){
                for(var opt in $scope.taco[cat]){
                    if (towel[cat] == opt && $scope.taco[cat][opt]) return true;
                }
            }
            return match;
        });

        return x;
    }



    $scope.filteredOptions = {};

    $scope.taco = {};

    $scope.print = function(){
    	console.dir($scope.taco);
    };
    $scope.toggle = function(category){
        $scope.filteredOptions[category] = !$scope.filteredOptions[category];
    
        if(!$scope.filteredOptions[category]) delete $scope.taco[category];
    };

});

