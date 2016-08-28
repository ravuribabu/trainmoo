define(['angular', 'angular-sweetalert-promised', 'angular-ui-utils', 'angular-ui-select2', 'ng-flow', 'angular-thumbnails', 'ngalertify', 'waves', 'angular-material'], 
	function(angular){
		
		'use strict';
		    
		//User module definition
		return angular.module('test', ['ui.router', 'oitozero.ngSweetAlert', 'ui.mask', 'ui.select2', 'flow', 'angular-thumbnails', 'ngAlertify', 'ngMaterial']);

});