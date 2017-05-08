'use strict';

/**
 * @ngdoc function
 * @name rainOrShineWeatherAppApp.controller:CurrentCtrl
 * @description
 * # CurrentCtrl
 * Controller of the rainOrShineWeatherAppApp
 */
angular.module('rainOrShineWeatherAppApp')
.controller('CurrentCtrl', function ($scope, $routeParams, current) {
  $scope.cityID = $routeParams.cityID;

  $scope.currentWeather = current.query({
      cityID: $routeParams.cityID
  });

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
