app.factory('TowelFactory', function($http) {

    var TowelFactory = {};

    var getData = function(res) {return res.data};

    TowelFactory.fetchAll = function() {
        return $http.get('/api/towels')
                    .then(getData);
    };

    TowelFactory.fetchOne = function(id) {
        return $http.get('/api/towels/' + id)
                    .then(getData);
    };

    TowelFactory.getReviews = function(id) {
        return $http.get('/api/reviews/towels/' + id)
                    .then(getData);
    }

    TowelFactory.addReview = function () {
        console.log("REQ.BODY: ", req.body);
        return $http.post('/api/reviews/', req.body)
        .then(getData);
    }

    return TowelFactory;
})

