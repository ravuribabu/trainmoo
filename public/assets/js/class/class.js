define(['angular', 'angular-sweetalert-promised', 'angular-ui-utils', 'angular-ui-select2', 'ng-flow', 'ng-table', 'angular-bootstrap', 'angular-bootstrap-calendar', 'moment', '../core/core'],
	function(angular){

		'use strict';

		//User module definition
		return angular.module('class', ['user', 'ui.router', 'oitozero.ngSweetAlert', 'ui.mask', 'ui.select2', 'flow', 'ngTable', 'ngAside', 'ui.bootstrap', 'mwl.calendar', 'core']);

});
