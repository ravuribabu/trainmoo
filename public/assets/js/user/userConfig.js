define(['angular', './user', '../wall/wall'], function(angular, user){

	'use strict';
	
	return user.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

		$stateProvider.state('app.edituser', {
	        url: "/user/:userid",
	        templateUrl: "assets/js/user/userEdit.html",
	        title: 'Users',
	        ncyBreadcrumb: {
	            label: 'Users'
	        }
	        
	    })
	    .state('app.user', {
	        url: "/user?credentialid",
	        templateUrl: "assets/js/user/userEdit.html",
	        title: 'Users',
	        ncyBreadcrumb: {
	            label: 'Users'
	        }
	        
	    })

		$locationProvider.html5Mode(true);
	});

});