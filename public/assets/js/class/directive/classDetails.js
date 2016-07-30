define(['angular', '../class', '../classFactory'], 

	function(angular, classModule){

		classModule.directive('classDetails', function(){
			return {
				restict : 'EA',
				scope: {
					class : '=',
					userid : '@'
				},
				templateUrl: 'assets/js/class/directive/classDetails.html',
				controller: 'classDetailsController'
			};
		});

		
		classModule.controller('classDetailsController', ["$scope", "$rootScope", "classFactory", "SweetAlert", "$window", "$state", function($scope, $rootScope, classFactory, SweetAlert, $window, $state){
			
			$rootScope.$on('CLAZZ_SELECT', function(e, clazz) {
				$scope.formData = clazz ;
				
				if (clazz._id) {
					classFactory
							.getClass(clazz._id)
							.success(function(data) {	
							 				console.log('receieved class data' + data);
											$scope.formData = data;
										})
									 .error(function(data){
											var errors = "\n";

											_.forEach(data.errors, function(element, index) {
												errors = errors + "\n" + index + ": " + element.message
											});

											SweetAlert.swal("The form cannot be submitted because it contains validation errors!", data.message + errors, "error");

									});
				} 
		
			});


			$scope.form = {

		        submit: function (form) {

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
							classFactory.updateClass($scope.formData._id, $scope.formData)
														.success(function(){
															//SweetAlert.swal("Class is updated successfully");
															$state.reload();
															//$window.location.href = '/';
														})
														.error(function(data){
															console.log(data);
														});
		                } else {
			                classFactory.createClass($scope.userid, $scope.formData);
						}
		            }

		        },
		        reset: function (form) {
		            $scope.myModel = angular.copy($scope.master);
		            form.$setPristine(true);

		        }
		    };




		}]);


});