app.factory('UserFactory', function($http,Session) {
    
    var UserFactory = {};

    var getData = function(res) { return res.data };

    UserFactory.fetchOne = function(id) {
        return $http.get(`/api/users/${id}`)
        .then(getData);
    };

    UserFactory.fetchUserOrders = function(id) {
        return $http.get(`/api/users/${id}/orders`)
        .then(getData);
    };

    UserFactory.fetchUserReviews = function(id) {
        return $http.get(`/api/users/${id}/reviews`)
        .then(getData);
    };

    return UserFactory;
});