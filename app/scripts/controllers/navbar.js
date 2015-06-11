'use strict';

/**
 * @ngdoc function
 * @name mayjongApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the mayjongApp
 */
angular.module('mayjongApp')
  .controller('NavbarCtrl', function ($scope, $rootScope) {
    $scope.links = [{
    	url: '#/',
    	name: 'Home'
    },{
        url: '#/games',
        name: 'Games'
    }];

    $scope.userLinks = [{
    	url: '#/logout',
    	name: 'Logout'
    }];


    $scope.logout = function(){
    	delete $rootScope.currentUser;
    };
  });
