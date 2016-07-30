define(['./user'], function(user){

	user.factory('userFactory', function($http){
		return {
			getUser: function(id){
				return $http.get('api/users/' + id);
			},
			post: function(data){
				return $http.post('api/users', data);
			},
			put: function(data, id){
				return $http.put('api/users/' + id, data);
			}
		};
	});

});