define(['angular', 'angular-sweetalert-promised', 'angular-ui-utils', 'angular-ui-select2', 'ng-flow', 'angular-bootstrap'], 
	function(angular){
		
		'use strict';

		//User module definition
		return angular.module('userList', ['ui.router', 'oitozero.ngSweetAlert', 'ui.mask', 'ui.select2', 'flow', 'ui.bootstrap']);

});