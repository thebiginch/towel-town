'use strict';
window.app = angular.module('FullstackGeneratedApp', ['fsaPreBuilt', 'ui.router', 'ui.bootstrap', 'ngAnimate', 'LocalStorageModule']);

function propCase(str) {
    var arr = str.split(' ');
    var res = arr.map(function(elem) {
        return elem[0].toUpperCase()+elem.substring(1);
    });
    return res.join(' ');
}

function superType(input) {
    return {}.toString.call(input).split(' ')[1].slice(0,-1);
}

app.config(function ($urlRouterProvider, $locationProvider) {
    // This turns off hashbang urls (/#about) and changes it to something normal (/about)
    $locationProvider.html5Mode(true);
    // If we go to a URL that ui-router doesn't have registered, go to the "/" url.
    $urlRouterProvider.otherwise('/');
    // Trigger page refresh when accessing an OAuth route
    $urlRouterProvider.when('/auth/:provider', function () {
        window.location.reload();
    });
});

// This app.run is for controlling access to specific states.
app.run(function ($rootScope, AuthService, $state) {

    // The given state requires an authenticated user.
    var destinationStateRequiresAuth = function (state) {
        return state.data && state.data.authenticate;
    };

    // $stateChangeStart is an event fired
    // whenever the process of changing a state begins.
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {

        if (!destinationStateRequiresAuth(toState)) {
            // The destination state does not require authentication
            // Short circuit with return.
            return;
        }

        if (AuthService.isAuthenticated()) {
            // The user is authenticated.
            // Short circuit with return.
            return;
        }

        // Cancel navigating to new state.
        event.preventDefault();

        AuthService.getLoggedInUser().then(function (user) {
            // If a user is retrieved, then renavigate to the destination
            // (the second time, AuthService.isAuthenticated() will work)
            // otherwise, if no user is logged in, go to "login" state.
            if (user) {
                $state.go(toState.name, toParams);
            } else {
                $state.go('login');
            }
        });

    });

});

app.filter('properCase', function() {
    return propCase;
});

app.filter('propFormat', function() {
    return function(input) {
        var type = superType(input);
        switch (type) {
            case 'Number':
                return input.toLocaleString();
            break;

            case 'Array':
                if (superType(input[0]) === 'Number') {
                    return input[0].toLocaleString() + ' in. x ' + input[1].toLocaleString() + ' in.';
                } else {
                    return input.join(', ');
                }
                return superType(input[0]);
            break;

            case 'String':
                return propCase(input);
            break;

            default:
                return type;
            break;
        }
    }
});
