app.factory('TowelFactory', function($http) {

    var TowelFactory = {};

    var getData = function(res) {return res.data};

    TowelFactory.fetchAll = function() {
        return $http.get('/api/towels')
            .then(getData)
            .then(function(towels) {
                var res = towels.map(function(towel) {
                    if (towel.reviews.length) {
                        var ratings = towel.reviews.map(function(review) {
                            return review.rating;
                        });
                        var sum = ratings.reduce(function(p,c) {
                            return p + c;
                        })
                        var avgRat = sum / towel.reviews.length;
                        towel.rating = avgRat;
                    }
                    return towel;
                });
                return res;
        });
    };

    TowelFactory.fetchOne = function(id) {
        return $http.get('/api/towels/' + id)
                    .then(getData);
    };

    TowelFactory.getReviews = function(id) {
        return $http.get('/api/reviews/towels/' + id)
                    .then(getData);
    };

    TowelFactory.addReview = function (review, id) {
        var review = {headline: review.headline, content: review.content, towelId: id, rating: review.rating, name: review.name};
        return $http.post('/api/reviews/', review)
        .then(getData);
    };

    TowelFactory.getProps = function(towel) {
        var props = Object.keys(towel);
        var res = props.filter(function(key) {
            var invalid = ['id', 'name', 'stock', 'image', 'description', 'name', 'reviews', 'orderId', 'createdAt', 'updatedAt', 'price'];
            console.log(key, ' ', invalid.indexOf(key) === -1);
            return invalid.indexOf(key) === -1;
        });
        return res;
    }

    return TowelFactory;
});

