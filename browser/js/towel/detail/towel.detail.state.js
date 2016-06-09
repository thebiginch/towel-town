app.config(function($stateProvider) {

    $stateProvider.state('towel', {
        //foobar
        url: '/towels/:towelId',
        //template: '<h1>You found the single towel page</h1>',
        templateUrl: 'js/towel/detail/towel.detail.html',
        controller: 'singleTowelController',
        resolve: {
            theTowel: function($stateParams, TowelFactory) {
                return TowelFactory.fetchOne($stateParams.towelId);
            },
            reviews: function($stateParams, TowelFactory) {
                return TowelFactory.getReviews($stateParams.towelId);
            }
        }
    });

});