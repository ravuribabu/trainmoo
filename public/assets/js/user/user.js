define(['angular', 'angular-sweetalert-promised', 'angular-ui-utils', 'angular-ui-select2', 'ng-flow'], 
	function(angular){
		
		'use strict';

		//User module definition
		return angular.module('user', ['ui.router', 'oitozero.ngSweetAlert', 'ui.mask', 'ui.select2', 'flow']);

});