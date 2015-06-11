'use strict';

/**
 * @ngdoc function
 * @name mayjongApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the mayjongApp
 */
angular.module('mayjongApp')
  .controller('AuthCtrl', function ($scope, $location, $rootScope) {
    $scope.init = function(){
        var string = $location.absUrl();

        var partials = string.split('/');

        string = partials[3];

        var user = {};

        var index = string.indexOf('&');

        user.username = string.substr(10, index-10);

        user.token = string.substring(index + 7, string.indexOf('#'));

        $rootScope.currentUser = user;

        $location.path('/');
    };
  });
