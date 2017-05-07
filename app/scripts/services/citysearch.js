'use strict';

/**
 * @ngdoc service
 * @name rainOrShineWeatherAppApp.citysearch
 * @description
 * # citysearch
 * Factory in the rainOrShineWeatherAppApp.
 */
angular.module('rainOrShineWeatherAppApp')
  .factory('citysearch', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/find?q=:query&type=like&mode=json&APPID=f871cb1a287c72d24f93963850b0e09e', {}, {
      find: {
        method: 'GET',
        params: {
          query: 'seattle'
        },
        isArray: false
      }
    });
  });
