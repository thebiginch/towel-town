app.config(function ($stateProvider) {

    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'js/login/login.html',
        controller: 'LoginCtrl'
    })

    .state('login.reset', {
        url:'/reset',
        templateUrl: 'js/login/reset.html',
        controller: 'LoginCtrl'
    });

});

app.controller('LoginCtrl', function ($scope, AuthService, AdminFactory, $state) {

    $scope.login = {};
    $scope.error = null;

    $scope.sendLogin = function (loginInfo) {

        $scope.error = null;

        AuthService.login(loginInfo).then(function (user) {
            $scope.user = user;
            $scope.passwordUpdate = AdminFactory.passwordUpdate;

            if (user.password_reset) {
                $state.go('login.reset');
            } else {
                $state.go('home');
            }

        }).catch(function () {
            $scope.error = 'Invalid login credentials.';
        });

    };

});
