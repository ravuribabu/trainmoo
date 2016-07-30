define(['angular', './wall', 'moment'], function(angular, wall, moment, postFactory) {

		'use strict';
		wall.controller('wallController', 
			function($scope, $rootScope, $stateParams, postFactory){

				$scope.obj = { flow : new Flow() };

				init();
				function init() {

					postFactory.getPosts('1234')
					   .success(function(data){
						   	$scope.posts = data;
						   	
					   })
					   .error(function(err){
					   	console.log(err);
					   });

				}

				

			});




 });