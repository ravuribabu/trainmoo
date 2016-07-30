define(['angular', './user'], function(angular, user){

	'use strict';
	
	return user.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

		$urlRouterProvider.otherwise("/app/users");

		$stateProvider.state('app.edituser', {
	        url: "/user/:id",
	        templateUrl: "assets/js/user/userEdit.html",
	        title: 'Users',
	        ncyBreadcrumb: {
	            label: 'Users'
	        }
	        
	    })
	    .state('app.newuser', {
	        url: "/user",
	        templateUrl: "assets/js/user/userEdit.html",
	        title: 'Users',
	        ncyBreadcrumb: {
	            label: 'Users'
	        }
	        
	    })

		$locationProvider.html5Mode(true);
	});

});