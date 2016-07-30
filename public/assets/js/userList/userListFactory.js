define(['./userList'], function(userList) {

    'use strict';

	userList.factory('userListFactory', function($http){
		return {
			getUsers: function(){
				return $http.get('api/users');
			}
		};
	});

});