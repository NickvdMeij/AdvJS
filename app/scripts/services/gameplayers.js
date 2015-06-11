'use strict';

/**
 * @ngdoc service
 * @name mayjongApp.GamePlayers
 * @description
 * # GamePlayers
 * Factory in the mayjongApp.
 */
angular.module('mayjongApp')
  .factory('GamePlayers', function (Api, $resource) {
    return $resource(Api.getUrl() + '/games/:id/players', {
      id: '@id'
    });
  });
