define(['angular', '../class'], function(angular, classModule) {

	'use strict';

	classModule.controller('classUserController', 
		function($scope, $state, $rootScope, $stateParams, $uibModalInstance, userFactory, user){

							                $scope.user = user;

							                $scope.ok = function () {
											    $uibModalInstance.close($scope.user);
											  };

											  $scope.cancel = function () {
											    $uibModalInstance.dismiss('cancel');
											  };
											
							            
		});
});