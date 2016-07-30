define(['angular',
		'./js/core/core.require',
		'./js/user/user.require',
		'./js/userList/userList.require',
		'./js/class/class.require',
		'./js/wall/wall.require',
		'./js/blog/blog.require',
	],

	function(angular){

	angular.module('app', ['core', 'user', 'userList', 'class', 'wall', 'blog']);
});
