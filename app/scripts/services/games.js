'use strict';

/**
 * @ngdoc service
 * @name mayjongApp.Games
 * @description
 * # Games
 * Factory in the mayjongApp.
 */
angular.module('mayjongApp')
  .factory('Games', function (Api, $resource) {
    return $resource(Api.getUrl() + '/games/:id', {
      id: '@id'
    });
  });
