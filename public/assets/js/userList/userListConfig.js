define(['./userList'], function(userList){

	'use strict';
	
	userList.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

		$urlRouterProvider.otherwise("/app/users");

		$stateProvider.state('app', {
	        url: "/app",
	        templateUrl: "assets/js/shared/app.html",
	        abstract: true
	    }).state('app.users', {
	        url: "/users",
	        templateUrl: "assets/js/userList/userList.html",
	        title: 'Users',
	        controller: 'userListController',
	        ncyBreadcrumb: {
	            label: 'Users'
	        }
	    })

		$locationProvider.html5Mode(true);
	});

});