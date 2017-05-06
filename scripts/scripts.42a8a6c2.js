"use strict";angular.module("rainOrShineWeatherAppApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("rainOrShineWeatherAppApp").controller("MainCtrl",["$scope","current",function(a,b){a.current=b.query(),a.refreshCurrent=function(){a.current=b.query({location:a.location})},this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("rainOrShineWeatherAppApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("rainOrShineWeatherAppApp").factory("current",["$resource",function(a){return a("http://api.openweathermap.org/data/2.5/weather?q=:location&units=imperial&APPID=YOUR_API_KEY_HERE",{},{query:{method:"GET",params:{location:"Seattle,us"},isArray:!1}})}]),angular.module("rainOrShineWeatherAppApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<div class="jumbotron"> <h1>\'Rain or Shine!\'</h1> <p class="lead"> <img src="images/sun-behind-rain-cloud.7c3a94f5.png" alt="Cloud Cover"> <img src="images/Sunshine-free.613f7635.jpeg" alt="Sun Breaking Out"><br> How\'s The Weather Today <div ng-app class="jumbotron" ng-controller="MainCtrl"> <h1>Weather for {{current.name}}</h1> <p class="lead"> <div ng-init="location=\'Seattle\'"> <p> <label for="location">Location: <input type="text" name="location" ng-model="location"> </label> </p> <p> <button class="btn btn-lg btn-primary" ng-click="refreshCurrent()">Get Current Weather</button> </p> <dl> <dt>Currently</dt> <dd>{{current.weather[0].main}}</dd> <dd>{{current.weather[0].description}}</dd> <dt>Temperature</dt> <dd>{{current.main.temp}}</dd> <dt>Wind</dt> <dd>{{current.wind.speed}} mph at {{current.wind.deg}} degrees</dd> <dt>Clouds</dt> <dd>{{current.clouds.all}}%</dd> </dl> </div> </p> </div> </p> <p><a class="btn btn-lg btn-success" ng-href="#/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p> </div> <div class="row marketing"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div>')}]);