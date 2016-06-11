    app.config(function($stateProvider) {

    $stateProvider.state('allTowels', {
        url: '/towels',
        templateUrl: 'js/towel/list/towel.list.html',
        controller: 'allTowelController',
        resolve: {
            allTowels: function(TowelFactory) {
                console.log(TowelFactory.fetchAll());
                return TowelFactory.fetchAll();
            }
        }
    });

});