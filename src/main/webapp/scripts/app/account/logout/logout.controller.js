'use strict';

angular.module('citestApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
