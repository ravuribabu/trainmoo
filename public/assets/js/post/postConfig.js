define(['angular', './post'], function(angular, user){

	'use strict';
	
	return user.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

		$stateProvider.state('app.post', {
	        url: "/post/:id",
	        templateUrl: "assets/js/post/post.html",
	        controller: 'postController',
	        title: 'Post',
	        ncyBreadcrumb: {
	            label: 'post'
	        }
	        
	    });
	    
		$locationProvider.html5Mode(true);
	});

});