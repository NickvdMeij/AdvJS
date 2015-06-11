'use strict';

/**
 * @ngdoc service
 * @name mayjongApp.GameTemplates
 * @description
 * # GameTemplates
 * Factory in the mayjongApp.
 */
angular.module('mayjongApp')
  .factory('GameTemplates', function (Api, $resource) {
    return $resource(Api.getUrl() + '/gametemplates/:id', {
      id: '@id'
    });
  });
