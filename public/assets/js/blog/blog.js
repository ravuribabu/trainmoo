define(['angular', 'angular-sweetalert-promised', 'angular-ui-utils', 'angular-ui-select2', 'ng-flow', 'angular-ckeditor', '../post/post.require'], 
	function(angular){
		
		'use strict';

		//User module definition
		return angular.module('blog', ['ui.router', 'oitozero.ngSweetAlert', 'ui.mask', 'ui.select2', 'flow', 'ckeditor', 'post']);

});