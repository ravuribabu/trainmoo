define(['angular', '../class', '../classFactory'], function(angular, classModule){
	
	classModule.directive('classSummaryList', function(){
		return {
			restict : 'EA',
			
			templateUrl: 'assets/js/class/directive/classSummaryList.html',
			controller: 'classSummaryController'
		};
	});


	classModule.controller('classSummaryController', ["$scope", "$rootScope", "classFactory", "SweetAlert","$stateParams", 
		function($scope, $rootScope, classFactory, SweetAlert, $stateParams){

		var createInProgress = function(classes){

			var inProgress = false;

			if (classes.length > 0)
			_.forEach(classes, function(element, index) {
				if (!element._id) {
					inProgress = true;
				}
			});

			return inProgress;
		};

		init();

		function init(){
			$scope.classes = [];
			$scope.userid = $stateParams.userid;
			$scope.programid = $stateParams.programid;
			
			classFactory.getClasses($scope.programid)
						 .success(function(data) {	
				 				console.log('receieved class data' + data);
								$scope.classes = data;
								_.forEach($scope.classes, function(element, index) {
									 	element.trainers = function() { return  _.join(_.map(element.teachers, 'shortname'), ', ') } ;
									});
								if ($scope.classes.length > 0) {
									$scope.selectClazz($scope.classes[0].classid);
								}
							})
						 .error(function(data){
								var errors = "\n";

								_.forEach(data.errors, function(element, index) {
									errors = errors + "\n" + index + ": " + element.message
								});

								SweetAlert.swal("Failed to create class!", data.message + errors, "error");
						});

			$scope.selectClazz = function(classid) {
				$scope.selected = classid;
				var clazz = _.find($scope.classes, {classid: classid});
				$rootScope.$emit('CLAZZ_SELECT', clazz);
			}


			$scope.selectProgram = function(classid) {
				if ($scope.programid) {
					console.log("Program selected: " + classid)
				}
			
			}


			$rootScope.$on('CREATE_NEW', function(event, classid){
				
				if (createInProgress($scope.classes)) {
					SweetAlert.swal('Create one class at a time please!!!');
				} 
				else{
					var newClass = {"classid": classid, "title": 'New ' + ($scope.programid?'Class':'Program')};


					newClass.trainers = function() { if (this.teachers!='undefined')  return  _.join(this.teachers, ', ') ; else return '' ; };

					$scope.classes.unshift(newClass);
					$scope.selected = classid;
					if ($scope.programid){
						newClass.programid = $scope.programid;
					}
					$rootScope.$emit('CLAZZ_SELECT', newClass);
				}

			});
		}

	}]);

});