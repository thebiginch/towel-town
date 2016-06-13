app.controller('allTowelController', function($scope, TowelFactory, allTowels) {
    $scope.towels = allTowels;

    $scope.towelOptions = {
    	type: ['Beach','Bath','Gym','Face'],
    	color: ['Fushia','Coral'],
    	material: ['Pima Cotton','Bamboo']
    };

    $scope.filteredOptions = {
    };

    $scope.taco = {};

    $scope.print = function(){
    	console.dir($scope.taco);
    };
    $scope.toggle = function(category){
        $scope.filteredOptions[category] = !$scope.filteredOptions[category];
    
        if(!$scope.filteredOptions[category]) delete $scope.taco[category];
    };

    $scope.filterFunction = function(obj,taco){
    	
    	

    	 return true;
    };

});

