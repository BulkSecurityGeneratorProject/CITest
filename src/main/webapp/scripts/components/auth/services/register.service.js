'use strict';

angular.module('citestApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


