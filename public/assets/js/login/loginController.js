define(['angular', './login', 'utils'], function(angular, login, utils) {

	

	login.controller('loginController', function($rootScope, $scope, $state, $window, authenticationFactory, SweetAlert){

	
		init()
		function init(){
			
			$scope.user = {};

			$scope.authWithGoogle = function(){

				$window.location.href  = '/api/auth/google';
			};

			$scope.form = new utils.AppForm(angular, function(form){
				authenticationFactory.login($scope.user)
									  .success(function(data){
									  	if (data && data.userid) {
											$state.go('app.wall', {userid:data.userid});
									  	} else {
											$state.go('app.user' , { credentialid :  data.credentialid } );
									  	}
									  	
									  })
									  .error(function(err){
									  	var error = JSON.parse(err);
									  	SweetAlert.swal(
										  	{   
										  		title: "Error?",   
										  		text: ((error && error.loginMessage) ?error.loginMessage[0] : 'Signup process failure'),   
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