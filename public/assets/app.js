define(['angular',
		'./js/core/core.require',
		'./js/user/user.require',
		'./js/userList/userList.require',
		'./js/class/class.require',
		'./js/wall/wall.require',
		'./js/post/post.require',
		'./js/blog/blog.require',
		'./js/login/login.require',
		'./js/test/test.require',
	],

	function(angular){

	  (function(document, window, $) {
	    'use strict';
	    var Site = window.Site;
	    $(document).ready(function() {
	      Site.run();
	    });

	  })(document, window, jQuery);


	var app = angular.module('app', ['core', 'user', 'userList', 'class', 'wall', 'blog', 'login', 'test']);


	app.config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

		$urlRouterProvider.otherwise("/app/login");

		$stateProvider.state('landing', {
		    url: '/trainmoo',
		    template: '<div ui-view class="fade-in-right-big smooth"></div>',
		    abstract: true,
		}).state('landing.welcome', {
		    url: '/welcome',
		    templateUrl: "assets/landing-page.html"
		});

		$locationProvider.html5Mode(true);
		$httpProvider.interceptors.push('authInterceptor');	

	});


	app.service('authInterceptor', function($q) {
	    var service = this;

	    service.responseError = function(response) {
	        if (response.status == 401){
	            window.location = "/app/login";
	        }
	        return $q.reject(response);
	    };
	});


	app.directive('selectpicker', function ($window) {
    return {
	        restrict: 'A',
	        link: function ($scope, $element, $attributes) {
	            $element.selectpicker({
					  style: 'btn-default',
					  size: 10
					});
	        }
	    };
	});

	app.directive('scrollable', function ($window) {
    return {
	        restrict: 'A',
	        link: function ($scope, $element, $attributes) {
	            $element.asScrollable({
					   namespace: "scrollable",
					});
	        }
	    };
	});


	app.directive('landingHeader', function ($window) {
    return {
	        restrict: 'A',
	        link: function ($scope, $element, $attributes) {
	            angular.element($window).bind("scroll", function () {
	                //if (this.pageYOffset >= 60) {
	                    $element.addClass('min');
	               // } else {
	               //     $element.removeClass('min');
	               // }
	            });

	        }
	    };
	});


	app.directive('labelauty', function () {
    return {
	        restrict: 'A',
	        link: function ($scope, $element, $attributes) {
	            $element.labelauty();
	        }
	    };
	});

	app.directive('select2', function(){
		return {
			restrict: 'A',
			link: function($scope, $element, $attributes){
				
				var defaults = {
				    width: "style",
				    theme: "material"
				  };

				var options = $.extend({}, defaults, $element.data());

				$element.select2(options);

			}
		};
	});


	app.directive('datepicker', function(){
		return {
			restrict: 'A',
			require: 'ngModel',
			link: function($scope, $element, $attributes){
				$element.datepicker({
					todayBtn: "linked",
				    clearBtn: true,
				    forceParse: false,
				    autoclose: true,
				    todayHighlight: true,
				    toggleActive: true,
				    defaultViewDate: { year: 2016, month: 08, day: 15 }
				});
			}
		};
	});
	//Apply to form-group element as attribute to get material look
	app.directive('floating', function(){
		return {
			restrict: 'A',
			link: function($scope, $element, $attributes) {
				var $this = $element;
				if ($this.data('material') === true) {
	                return;
	              }

	              var $control = $this.find('.form-control');

	              // Add hint label if required
	              if ($control.attr("data-hint")) {
	                $control.after("<div class=hint>" + $control.attr("data-hint") + "</div>");
	              }

	              if ($this.hasClass("floating")) {
	                // Add floating label if required
	                if ($control.hasClass("floating-label")) {
	                  var placeholder = $control.attr("placeholder");
	                  $control.attr("placeholder", null).removeClass("floating-label");
	                  $control.after("<div class=floating-label>" + placeholder + "</div>");
	                }

	                // Set as empty if is empty
	                if ($control.val() === null || $control.val() == "undefined" || $control.val() === "") {
	                  $control.addClass("empty");
	                }
	              }

	              // Support for file input
	              if ($control.next().is("[type=file]")) {
	                $this.addClass('form-material-file');
	              }

	              $this.data('material', true);
				


				  $element.on("keydown.site.material paste.site.material", ".form-control", function(e) {
			        if (_isChar(e)) {
			          $(this).removeClass("empty");
			        }
			      }).on("keyup.site.material change.site.material", ".form-control", function() {
			        var $this = $(this);
			        if ($this.val() === "" && (typeof $this[0].checkValidity != "undefined" && $this[0].checkValidity())) {
			          $this.addClass("empty");
			        } else {
			          $this.removeClass("empty");
			        }
			      }).on("focus", ".form-material-file", function() {
			        $(this).find("input").addClass("focus");
			      })
			      .on("blur", ".form-material-file", function() {
			        $(this).find("input").removeClass("focus");
			      })
			      .on("change", ".form-material-file [type=file]", function() {
			        var value = "";
			        $.each($(this)[0].files, function(i, file) {
			          value += file.name + ", ";
			        });
			        value = value.substring(0, value.length - 2);
			        if (value) {
			          $(this).prev().removeClass("empty");
			        } else {
			          $(this).prev().addClass("empty");
			        }
			        $(this).prev().val(value);
			      });


			      function _isChar(e) {
				      if (typeof e.which == "undefined") {
				        return true;
				      } else if (typeof e.which == "number" && e.which > 0) {
				        return !e.ctrlKey && !e.metaKey && !e.altKey && e.which != 8 && e.which != 9;
				      }
				      return false;
				    }
		}
	  }
	});

});
