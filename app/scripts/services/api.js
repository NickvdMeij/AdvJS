'use strict';

/**
 * @ngdoc service
 * @name mayjongApp.api
 * @description
 * # api
 * Provider in the mayjongApp.
 */
angular.module('mayjongApp')
  .service('Api', function () {

    // Private variables
    var api = 'http://mahjongmayhem.herokuapp.com';

    return {
      getUrl: function(){
        return api;
      }
    };
  });
