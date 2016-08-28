define(['angular', '../user'], function(angular, user) {

	user.directive('userCard', function(){
		return {
				restict : 'EA',
				scope: {
				},
				templateUrl: 'assets/js/user/directive/userCard.html',
				controller: 'userController'
		};
	});
});