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
  return $resource('http://api.openweathermap.org/data/2.5/weather?id=:cityID&units=imperial&APPID=f871cb1a287c72d24f93963850b0e09e', {}, {
    query: {
      method:'GET',
      params:{
        cityID: '4717560' // Paris, France ID
      },
      isArray:false
    }
  });
});
