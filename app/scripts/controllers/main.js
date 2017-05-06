'use strict';

/**
 * @ngdoc function
 * @name rainOrShineWeatherAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rainOrShineWeatherAppApp
 */
angular.module('rainOrShineWeatherAppApp')
.controller('MainCtrl', function ($scope, current) {
  $scope.current = current.query();

  $scope.refreshCurrent = function(){
      $scope.current = current.query({
          location: $scope.location
      });
  };

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
