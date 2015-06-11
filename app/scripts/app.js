'use strict';

/**
 * @ngdoc overview
 * @name mayjongApp
 * @description
 * # mayjongApp
 *
 * Main module of the application.
 */
angular
  .module('mayjongApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'infinite-scroll'
  ])

  .config(function($httpProvider){
    $httpProvider.interceptors.push('authInterceptor');
  })

  .factory('authInterceptor', function ($rootScope) {
    return {
      request: function (config) {
        config.headers = config.headers || {};
        if ($rootScope.currentUser) {
          config.headers['x-username'] = $rootScope.currentUser.username;
          config.headers['x-token'] = $rootScope.currentUser.token;
        }
        return config;
      },
    };
  })

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/games', {
        templateUrl: 'views/games.html',
        controller: 'GamesCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl'
      })
      .when('/games/create', {
        templateUrl: 'views/game/create.html',
        controller: 'GamesCtrl'
      })
      .when('/games/:id', {
        templateUrl: 'views/game/detail.html',
        controller: 'GameCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
