'use strict';

/**
 * @ngdoc directive
 * @name mayjongApp.directive:game
 * @description
 * # game
 */
angular.module('mayjongApp')
  .directive('gameSnippet', function () {
    return {
      templateUrl: 'views/directives/game.html',
      restrict: 'E',
      controller: function($scope, GamePlayers, $location, $rootScope){
      	$scope.getPanelClass = function(state){
      		switch(state){
      			case 'playing': return 'panel-warning';
      			case 'open': return 'panel-success';
      			case 'finished': return 'panel-danger';
      		}
      	};

      	$scope.getButtonClass = function(state){
      		switch(state){
      			case 'playing': return 'btn-warning';
      			case 'open': return 'btn-success';
      			case 'finished': return 'btn-danger';
      		}
      	};

      	$scope.joinable = function(game){
      		if(!$rootScope.currentUser || game.state !== 'open' || game.players.length >= game.maxPlayers){
      			return false;
      		}

      		for(var x = 0; x < game.players.length; x++){
      			if(game.players[x]._id === $rootScope.currentUser.username){
      				return false;
      			}
      		}

      		return true;
      	};

      	$scope.joinGame = function(game){
      		var player = new GamePlayers({
      			id: game._id
      		});

      		player.$save(function(player){
      			console.log(player);
      			$location.path('#/games/' + game._id);
      		});
      	};
      }
    };
  });
