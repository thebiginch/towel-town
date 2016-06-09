app.config(function ($stateProvider) {

  $stateProvider.state('addReview', {
    url: '/towels/:towelId/addreview',
    templateUrl: 'js/review/addReview.template.html',
    controller: 'singleTowelController'
  });
  
});