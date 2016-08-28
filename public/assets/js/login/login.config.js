define(['angular', './login'], function(angular, login){

	'use strict';
	
	return login.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

		$stateProvider.state('app.login', {
	        url: "/login",
	        templateUrl: "assets/js/login/login.html",
	        controller: 'loginController',
	        title: 'Post',
	        ncyBreadcrumb: {
	            label: 'post'
	        }  
	    }).state('app.singup', {
	        url: "/signup",
	        templateUrl: "assets/js/login/signup.html",
	        controller: 'signupController',
	        title: 'Post',
	        ncyBreadcrumb: {
	            label: 'post'
	        }
	        
	    });
	    
		$locationProvider.html5Mode(true);
	});

});