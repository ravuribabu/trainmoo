define(['angular', 'angular-sweetalert-promised', 'angular-ui-utils', 'angular-ui-select2', 'ng-flow', 'angular-thumbnails', '../user/user.require'], 
	function(angular){
		
		'use strict';
		    
		//User module definition
		return angular.module('login', ['user', 'ui.router', 'oitozero.ngSweetAlert', 'ui.mask', 'ui.select2', 'flow', 'angular-thumbnails']);

});