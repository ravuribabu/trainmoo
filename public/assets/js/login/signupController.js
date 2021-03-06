define(['angular', './login', 'utils'], function(angular, login, utils) {

	

	login.controller('signupController', function($rootScope, $scope, $state, authenticationFactory, SweetAlert){

	
		init()
		function init(){
			
			$scope.user = {};
			$scope.userTypes = ['student', 'teacher', 'parent', 'admin'];

			$scope.form = new utils.AppForm(angular, function(form){

				console.log('Singup for user: ' + $scope.user);

				authenticationFactory.signup($scope.user)
									  .success(function(data){
									  	SweetAlert.swal('Congrats Signedup: ' + data);
									  	SweetAlert.swal(
										  	{   
										  		title: "Signup Success?",   
										  		text: "Welcome to trainmoo family!",   
										  		type: "success",   
										  		showCancelButton: false,   
										  		confirmButtonText: "Ok!",   
										  		closeOnConfirm: true 
										  	}, 
										  	function(){   
										  		$state.go('app.login');
										  	 }
										);
									  	
									  })
									  .error(function(err){
									  	var error = JSON.parse(err);
									  	SweetAlert.swal(
										  	{   
										  		title: "Error?",   
										  		text: ((error && error.signupMessage) ?error.signupMessage[0] : 'Signup process failure'),   
										  		type: "error",   
										  		showCancelButton: false,   
										  		confirmButtonText: "Ok!",   
										  		closeOnConfirm: true 
										  	}, 
										  	function(){   
										  	 }
										);
									  });
			});

		} //END INIT
	});
});