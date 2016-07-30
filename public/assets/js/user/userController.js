define(['./user', './userFactory','../core/core'], function(user, core) {

	'use strict';

	user.controller('userController', 

		function($scope, $http, $window, userFactory, $state, $timeout, SweetAlert, flowFactory, $stateParams){

			$scope.removeImage = function () {
		        $scope.noImage = true;
		    };
		    $scope.newUser = true;

			$scope.select2Options = {
			    multiple: true, 
			    minimumInputLength: 1,
			    formatResult: function (item) {
			        return item.text;
			    },
			    formatSelection: function (item) {
			        return item.text;
			    },
			  }

			$scope.formData = {};
			$scope.searchString = "";

			$scope.master = $scope.myModel;
		    $scope.form = {

		        submit: function (form) {
		        	console.log($scope.formData);
		            var firstError = null;
		            if (form.$invalid) {

		                var field = null, firstError = null;
		                for (field in form) {
		                    if (field[0] != '$') {
		                        if (firstError === null && !form[field].$valid) {
		                            firstError = form[field].$name;
		                        }

		                        if (form[field].$pristine) {
		                            form[field].$dirty = true;
		                        }
		                    }
		                }

		                angular.element('.ng-invalid[name=' + firstError + ']').focus();
		                SweetAlert.swal("The form cannot be submitted because it contains validation errors!", "Errors are marked with a red, dashed border!", "error");
		                return;

		            } else {
		                if ($scope.formData._id) {
							userFactory.put($scope.formData, $scope.formData._id)
														.success(function(){
															$window.location.href = '/';

															//SweetAlert.swal("Congratulations!", "User is sucessfully registered with Trainmoo!", "success");
															//$scope.formData = {};
														})
														.error(function(data){
															var errors = "\n";

															_.forEach(data.errors, function(element, index) {
																errors = errors + "\n" + index + ": " + element.message
															});

															SweetAlert.swal("The form cannot be submitted because it contains validation errors!", data.message + errors, "error");
														});
		                } else {
			                userFactory.post($scope.formData)
								.success(function(){
									$window.location.href = '/';

									//SweetAlert.swal("Congratulations!", "User is sucessfully registered with Trainmoo!", "success");
									//$scope.formData = {};
								})
								.error(function(data){
									var errors = "\n";

									_.forEach(data.errors, function(element, index) {
										errors = errors + "\n" + index + ": " + element.message
									});

									SweetAlert.swal("The form cannot be submitted because it contains validation errors!", data.message + errors, "error");
								});
						}
		            }

		        },
		        reset: function (form) {

		            $scope.myModel = angular.copy($scope.master);
		            form.$setPristine(true);

		        }
		    };

			init();
			function init() {
				if ($stateParams.id) {
					$scope.newUser = false;
					$scope.action = "Edit";
					console.log("Load User: " + $stateParams.id);
					getUser($stateParams.id);
				} else {
					$scope.action = "Create";
				}
			    $scope.noImage = false;
			}

			function getUser(id) {

				userFactory.getUser(id)
					.success(function(data){
						$scope.formData = data;
						$scope.formData.password2 = data.password;
						console.log(data);
					})
					.error(function(err){console.log(err);});
			}
	    });
});