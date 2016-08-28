define(['angular', './test'], function(angular, test){

	'use strict';
	
	return test.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

		$stateProvider.state('app.test', {
	        url: "/test",
	        templateUrl: "assets/js/test/test.html",
	        controller: 'testController',
	        title: 'Post',
	        ncyBreadcrumb: {
	            label: 'post'
	        }
	        
	    });
	    
		$locationProvider.html5Mode(true);
	});

});