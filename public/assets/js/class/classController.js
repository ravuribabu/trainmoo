define(['angular', './class'], function(angular, classModule) {

'use strict';
		classModule.controller('classController', 
			function($scope, $rootScope, $stateParams, userFactory){

				init();
				function init() {
					
					var user = {};
					userFactory
						.getUser($stateParams.userid)
						.success(function(data) {
							$scope.user = data;
						})
						.error(function(err) {
							SweetAlert.swal(err);
						});				

					$scope.createNew = function() {
						$rootScope.$emit('CREATE_NEW', "0");
					};
				}


			});




 });