define(['angular', 'angular-sweetalert-promised', 'angular-ui-utils', 'angular-ui-select2', 'ng-flow', 'angular-thumbnails', 'angular-sanitize', 'angular-bootstrap', 'angular-slick-carousel', 'ng-pdf'], 
	function(angular){
		
		'use strict';
		    
		//User module definition
		return angular.module('wall', ['ui.router', 'oitozero.ngSweetAlert', 'ui.mask', 'ui.select2', 'flow', 'angular-thumbnails', 'post', 'ngSanitize', 'ui.bootstrap', 'slickCarousel', 'pdf']);

});