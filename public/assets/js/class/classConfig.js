define(['angular', './class'], function(angular, classModule) {
'use strict';
	classModule.config(
		function($stateProvider, $urlRouterProvider, $locationProvider) {

			$stateProvider.state('app.class', {
			        url: "/classes/users/:userid",
			        templateUrl: "assets/js/class/classes.html",
			        title: 'Class',
			        controller: "classController",
			        ncyBreadcrumb: {
			            label: 'Class'
			        }
			        
			    });

			$locationProvider.html5Mode(true);
		});
});