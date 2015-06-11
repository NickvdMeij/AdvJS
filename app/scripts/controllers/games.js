'use strict';

/**
 * @ngdoc function
 * @name mayjongApp.controller:GamesCtrl
 * @description
 * # GamesCtrl
 * Controller of the mayjongApp
 */
angular.module('mayjongApp')
  .controller('GamesCtrl', function ($scope, $rootScope, Games, GameTemplates) {
  	$scope.numOfRows = 3;
    $scope.games = [];
    $scope.states = [{
    	name: 'Open',
    	value: 'open'
    },{
    	name: 'Finished',
    	value: 'finished'
    },{
    	name: 'Playing',
    	value: 'playing'
    }];
    $scope.loading = false;
    $scope.query = {
    	pageSize: 50,
    	state: 'open'
    };

    $scope.getRows = function(){
        var rows = [];
        var numRows = $scope.numOfRows;
        var index = 0;
        while(index < numRows){
            rows.push(index);
            index++;
        }
        return rows;
    };

    $scope.getTotal = function(){
    	return 10;
    };

    $scope.init = function(){
    	$scope.loading = true;
    	Games.query($scope.query, function(games){
    		$scope.games = games;
    		$scope.loading = false;
    	});

    	GameTemplates.query(function(gametemplates){
    		$scope.gameTemplates = gametemplates;
    	});
    };

    $scope.applyFilters = function(){
    	$scope.loading = true;

    	Games.query($scope.query, function(games){
    		$scope.games = games;
    		$scope.loading = false;
    	});
    };

    $scope.initCreate = function(){
    	GameTemplates.query(function(gametemplates){
    		$scope.gameTemplates = gametemplates;
    	});
    };

    $scope.createGame = function(){

    	delete $scope.createError;

    	if($scope.newGame.minPlayers < 0 || $scope.newGame.maxPlayers < $scope.newGame.minPlayers || $scope.newGame.templateName === undefined || $scope.newGame.templateName === '' || !$rootScope.currentUser){
    		$scope.createError = {};
	    	if($scope.newGame.minPlayers < 0){
	    		$scope.createError.minPlayers = true;
	    	}
	    	if($scope.newGame.maxPlayers < $scope.newGame.minPlayers){
	    		$scope.createError.maxPlayers = true;
	    	}

	    	if($scope.newGame.templateName === undefined || $scope.newGame.templateName === ''){
	    		$scope.createError.template = true;
	    	}

	    	if(!$rootScope.currentUser){
	    		$scope.createError.user = true;
	    	}
    	}

    	if(!$scope.createError){
	    	var game = new Games({
	    		minPlayers: $scope.newGame.minPlayers,
	    		maxPlayers: $scope.newGame.maxPlayers,
	    		templateName: $scope.newGame.templateName
	    	});

	    	game.$save(function(game){
	    		console.log(game);
	    	});

	    	$scope.createError = false;
    	}
    };
  });
