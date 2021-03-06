define(['./user'], function(user){

	user.factory('userFactory', function($http){
		return {
			getUser: function(){
				return $http.get('api/user');
			},
			getUserCredential: function(credentialid){
				return $http.get('api/credential/' + credentialid);
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