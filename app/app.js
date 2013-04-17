'use strict';



// Declare app level module which depends on filters, and services
var app = angular.module('wordringApp', []);


app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    	.when('/view1', 
    		{
    			templateUrl: 'partials/partial1.html', 
    			controller: 'WordsController'
    		})
  
    .otherwise(
    	{
    		redirectTo: '/view1'
    	});
  }]);
