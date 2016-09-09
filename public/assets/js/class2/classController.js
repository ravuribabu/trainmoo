define(['angular', './class'], function(angular, classModule) {

'use strict';
		classModule.controller('classController', 
			function($scope, $state, $rootScope, $stateParams, $uibModal, userFactory, $aside){


				$scope.programs = [{
					name: 'Bodybuilding',
					details: 'It is a long established fact that a reader will be distracted by ',
					location: 'Bellandur, Bangalore',
					categories: "fitness, Bodybuilding" ,
					style: 'In Class',
					classes: 3,
					students: 20,
					events: 10,
					posts: 100,
					status: 'In Progress'

				},{
					name: 'Bodybuilding',
					details: 'It is a long established fact that a reader will be distracted by ',
					location: 'Bellandur, Bangalore',
					categories: "fitness, Bodybuilding" ,
					style: 'In Class',
					classes: 3,
					students: 20,
					events: 10,
					posts: 100,
					status: 'In Progress'

				},{
					name: 'Bodybuilding',
					details: 'It is a long established fact that a reader will be distracted by ',
					location: 'Bellandur, Bangalore',
					categories: "fitness, Bodybuilding" ,
					style: 'In Class',
					classes: 3,
					students: 20,
					events: 10,
					posts: 100,
					status: 'In Progress'

				}];

				

				init();
				function init() {
					
					$scope.programid = $stateParams.programid;
					$scope.classType = ($scope.programid?'Class':'Program');
					$scope.title = ($scope.programid?'Classes':'Programs');

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

				$scope.add = function(role) {
					
					$scope.classUser = {
						email: $scope.user.credential.local.email,
						firstname: $scope.user.credential.name.firstname,
						lastname: $scope.user.credential.name.lastname,
						role: role
					}

			        var modalInstance = $aside.open({
			            templateUrl: 'assets/js/class/directive/classUserAdd.html',
			            placement: 'right',
			            size: 'md',
			            backdrop: true,
			            controller: 'classUserController',
			            resolve: {
			            	'user': $scope.classUser
			            }
			        });
				
				};
				
			});




 });