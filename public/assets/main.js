require.config({
	
	paths: {
		'bootstrap': '../assets/bower_components/bootstrap/dist/js/bootstrap.min',
		'angular' : '../assets/bower_components/angular/angular',
		'jquery' : '../assets/bower_components/jquery/dist/jquery',
		'angular-route': '../assets/bower_components/angular-route/angular-route.min',
		'angular-ui-router': '../assets/bower_components/angular-ui-router/release/angular-ui-router',
		'angular-ui-utils': '../assets/bower_components/angular-ui-utils/mask.min',
		'angular-ui-select2': '../assets/bower_components/angular-ui-select2/src/select2',
		'angular-animate': '../assets/bower_components/angular-animate/angular-animate',
		'SweetAlert' : '../assets/bower_components/sweetalert/dist/sweetalert.min',
		'angular-sweetalert-promised': '../assets/bower_components/angular-sweetalert-promised/SweetAlert.min',
		'select2' : '../assets/bower_components/select2/select2',
		'angular-bootstrap': '../assets/bower_components/angular-bootstrap/ui-bootstrap-tpls',
		'ng-table': '../assets/bower_components/ng-table/dist/ng-table',
		'ng-flow': '../assets/bower_components/ng-flow/dist/ng-flow',
		'flow': '../assets/bower_components/flow.js/dist/flow',
		'lodash' : '../assets/bower_components/lodash/lodash',
		'perfect-scrollbar' : '../assets/bower_components/perfect-scrollbar/js/perfect-scrollbar.jquery',
		'angular-bootstrap-calendar' : '../assets/bower_components/angular-bootstrap-calendar/dist/js/angular-bootstrap-calendar-tpls',
		'interact': '../assets/bower_components/interact/dist/interact',
		'moment': '../assets/bower_components/moment/moment',
		'angular-aside': '../assets/bower_components/angular-aside/dist/js/angular-aside',
		'utils': '../assets/js/core/utils',
		'angular-thumbnails': '../assets/js/shared/directive/thumbnail',
		'pdfjs' : '../assets/bower_components/pdfjs-dist/build/pdf',
		"pdfjs-dist/build/pdf": "../assets/bower_components/pdfjs-dist/build/pdf",
    	"pdfjs-dist/build/pdf.worker": "../assets/bower_components/pdfjs-dist/build/pdf.worker",
    	"ckeditor" : "../assets/bower_components/ckeditor/ckeditor",
    	"angular-ckeditor": "../assets/bower_components/angular-ckeditor/angular-ckeditor",
    	"angular-sanitize": "../assets/bower_components/angular-sanitize/angular-sanitize",
    	"angular-slick-carousel": "../assets/bower_components/angular-slick-carousel/dist/angular-slick",
    	"slick-carousel": "../assets/bower_components/slick-carousel/slick/slick",
    	"ng-pdf" : "../assets/js/shared/directive/ng-pdf"
	},
	
	
	shim: {
		'angular': {
			exports: 'angular'
		},
		'bootstrap' : {
			deps : ['jquery']
		},
		'perfect-scrollbar' : {
			deps : ['jquery']
		},
		
		'select2' : {
			deps : ['jquery']
		},
		'angular-route' : {
			deps : ['angular']
		},
		'angular-ui-router' : {
			deps : ['angular']
		},
		'angular-aside' : {
			deps : ['angular-bootstrap']
		},
		'angular-ui-utils' : {
			deps : ['angular']
		},
		'angular-animate' : {
			deps : ['angular']
		},
		'angular-sanitize' : {
			deps : ['angular']
		},
		'angular-bootstrap': {
			deps: ['angular', 'angular-animate']
		},
		'angular-bootstrap-calendar' : {
			deps : [ 'moment', 'interact', 'angular-aside', 'angular-bootstrap']
		},
		'angular-ui-select2' : {
			deps : ['angular', 'select2']
		},
		'ng-flow' : {
			deps : ['angular', 'flow']
		},
		'ng-table' : {
			deps : ['angular']
		},
		'angular-sweetalert-promised' : {
			deps : ['angular', 'SweetAlert']
		},
		'angular-slick-carousel' : {
			deps : ['slick-carousel', 'angular']
		},
		'utils': {
			deps: ['angular','SweetAlert']
		},
		'app': {
			deps : [ 'bootstrap', 'angular-ui-router', 'moment']
		},
		'angular-ckeditor': {
			deps: ['ckeditor']
		}
		
	}
});


require(['angular', 'app'], function(angular){
	angular.bootstrap(document, ['app']);
});