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
    	"ng-pdf" : "../assets/js/shared/directive/ng-pdf",
    	"jquery-appear-plugin": "../assets/bower_components/jquery.appear.js/jquery.appear",
    	"ngAppear" : "../assets/bower_components/angular-appear/build/angular-appear.min",
    	"countTo" : "../assets/bower_components/angular-count-to-0.1.1/dist/angular-filter-count-to.min",

    	"breakpoints" : "../assets/bower_components/breakpoints/breakpoints", 
    	"animsition" : "../assets/bower_components/animsition/dist/js/animsition", 
		"jquery-asScroll" :"../assets/bower_components/asscroll/jquery-asScroll", 
		// "mousewheel"			  :"../../../global/vendor/mousewheel/jquery.mousewheel.js", 
		"asScrollable"	:"../assets/bower_components/jquery-asScrollable/dist/jquery.asScrollable.all", 
		"asHoverScroll"	:"../assets/bower_components/jquery-asHoverScroll/dist/jquery-asHoverScroll",
		"waves"			  :"../assets/bower_components/Waves/dist/waves", 
		"switchery"			  :"../assets/bower_components/switchery/dist/switchery.min", 
		"intro"			  :"../assets/bower_components/intro.js/intro", 
		"screenfull"			  :"../assets/bower_components/screenfull/dist/screenfull", 
		"slidePanel"			  :"../assets/bower_components/jquery-slidePanel/dist/jquery-slidePanel", 
		"core" :"../assets/global/js/core", 
		"site" :"../assets/remark/site", 
		"menu" :"../assets/remark/sections/menu", 
		"menubar" :"../assets/remark/sections/menubar", 
		"sidebar" :"../assets/remark/sections/sidebar", 
		"config-colors"	:"../assets/global/js/configs/config-colors", 
		"config-tour" :"../assets/remark/configs/config-tour", 
		// "comp-asscrollable" :"../assets/global/js/components/asscrollable", 
		"comp-animsition" :"../assets/global/js/components/animsition", 
		"comp-slidepanel" :"../assets/global/js/components/slidepanel", 
		"comp-switchery"	:"../assets/global/js/components/switchery", 
		"comp-tabs"	:"../assets/global/js/components/tabs",
		"comp-material"	:"../assets/global/js/components/material",
		"comp-bootstrapselect"	:"../assets/global/js/components/bootstrap-select",
		"jquery-placeholder":"../assets/global/js/components/jquery-placeholder",
		"jquery-labelauty":"../assets/bower_components/jquery-labelauty/source/jquery-labelauty",
		"modernizr": "../assets/bower_components/components-modernizr/modernizr",
		"angular-aria": "../assets/bower_components/angular-aria/angular-aria",
		"angular-material": "../assets/bower_components/angular-material/angular-material",
		"alertify" : "../assets/bower_components/alertify/alertify",
		"ngalertify" : "../assets/bower_components/alertify/ngAlertify",
		"bootstrap-select": "../assets/bower_components/bootstrap-select/dist/js/bootstrap-select",
		"bootstrap-datepicker": "../assets/bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker",
		"es6-promise": "../assets/bower_components/es6-promise/promise"

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
		
		'jquery-appear-plugin': {
			deps: ['jquery']
		},
		'ngAppear' : {
			deps: ['angular', 'jquery-appear-plugin']
		},
		'countTo' : {
			deps: ['angular']
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
		"jquery-asScroll": {
			deps:['jquery']
		},
		"asScrollable": {
			deps:['jquery']
		},
		"asHoverScroll": {
			deps:['jquery']
		},
		
		"core": {
			deps:['jquery']
		},
		"site": {
			deps:['jquery']
		},
		"menu": {
			deps:['jquery']
		},
		"menubar": {
			deps:['jquery']
		},
		"sidebar": {
			deps:['jquery']
		},
		"slidePanel": {
			deps:['jquery']
		},
		"config-colors": {
			deps:['jquery']
		},
		"config-tour": {
			deps:['jquery']
		},
		"comp-animsition": {
			deps:['jquery']
		},
		"comp-slidepanel": {
			deps:['jquery']
		},
		"switchery": {
			deps:['jquery']
		},
		"comp-switchery": {
			deps:['jquery', 'switchery']
		},
		"comp-tabs": {
			deps:['jquery']
		},
	
		"breakpoints": {
			deps:['jquery']
		},
		"bootstrap-datepicker": {
			depends: ['jquery']
		},
		"comp-material": {
			deps:['jquery', 'jquery-placeholder']
		},
		"jquery-placeholder": {
			deps:['jquery']
		},
		"angular-aria" : {
			deps: ['angular']
		},
		"angular-material" : {
			deps: ['angular-aria', 'angular', 'angular-animate', 'es6-promise']
		},
		"ngalertify" : {
			deps: ['alertify', 'angular']
		},
		"jquery-labelauty": {
			deps: ["jquery"]
		},

		'app': {
			deps : [ 'bootstrap', 'angular-ui-router', 'moment', 'ngAppear', 'countTo',
			"animsition", "jquery-asScroll", "asScrollable", "asHoverScroll", "waves", "switchery", 
			 "intro", "screenfull", "slidePanel", "core", "site", "menu", "menubar", "sidebar", "config-colors",
	 		"config-tour", "comp-animsition", "comp-slidepanel", "comp-switchery", "comp-tabs", 
	 		"breakpoints",	"jquery-placeholder", "modernizr", "ngalertify", "angular-material", "jquery-labelauty", "bootstrap-select"]
		},
		'angular-ckeditor': {
			deps: ['ckeditor']
		}
		
	}
});


require(['angular', 'app'], function(angular){
	angular.bootstrap(document, ['app']);
});