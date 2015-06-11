'use strict';

/**
 * @ngdoc function
 * @name mayjongApp.controller:GamectrlCtrl
 * @description
 * # GamectrlCtrl
 * Controller of the mayjongApp
 */
angular.module('mayjongApp')
  .controller('GameCtrl', function ($scope, $routeParams) {
  	$scope.params = $routeParams;
  });
