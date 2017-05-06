'use strict';

/**
 * @ngdoc service
 * @name rainOrShineWeatherAppApp.current
 * @description
 * # current
 * Factory in the rainOrShineWeatherAppApp.
 */
angular.module('rainOrShineWeatherAppApp')
.factory('current', function ($resource) {
  // Service logic
  // ...

  // Public API here
  return $resource('http://api.openweathermap.org/data/2.5/weather?q=:location&units=imperial&APPID=YOUR_API_KEY_HERE', {}, {
    query: {
      method:'GET',
      params:{
        location: 'Seattle,us'
      },
      isArray:false
    }
  });
});
