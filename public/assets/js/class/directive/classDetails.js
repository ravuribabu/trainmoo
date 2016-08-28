define(['angular', '../class', '../../core/utils', '../classFactory'], 

	function(angular, classModule, utils){

		classModule.directive('classDetails', function(){
			return {
				restict : 'EA',
				
				templateUrl: 'assets/js/class/directive/classDetails.html',
				controller: 'classDetailsController'
			};
		});

		
		classModule.controller('classDetailsController', 
			["$scope", "$rootScope", "classFactory", "SweetAlert", "$window", "$state", "$stateParams", "alertify" ,
				function($scope, $rootScope, classFactory, SweetAlert, $window, $state, $stateParams, alertify){

			$scope.disableForm = true;
			$scope.userid = $stateParams.userid;
			$scope.programid = $stateParams.programid;

			$scope.teachers = [{
					id: $scope.userid,
					name: 'Rambabu Ravuri'
				}]

			$rootScope.$on('CLAZZ_SELECT', function(e, clazz) {
				$scope.disableForm = false;
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

				$scope.disableForm = false;
		
			});

			$scope.form = new utils.AppForm(angular, function(form){
				if ($scope.formData._id) {
							classFactory.updateClass($scope.formData)
														.success(function(data){
															alertify
															    .reset()
															    .maxLogItems(2)
															    .closeLogOnClick(true)
															    .delay(2000)
															    .logPosition("bottom left")
															    .success("Class updated successfully");
															$state.reload();

														})
														.error(function(data){
															console.log(data);
														});
		                } else {
			                classFactory.createClass($scope.formData)
			                			.success(function(){
															alertify
															    .reset()
															    .maxLogItems(2)
															    .closeLogOnClick(true)
															    .delay(2000)
															    .logPosition("bottom left")
															    .success("Class created successfully");
															$state.reload();

														})
														.error(function(data){
															console.log(data);
														});
						}
			}, function(){

			});
	

		}]);


});