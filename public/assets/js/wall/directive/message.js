define(['angular', '../wall', 'moment'], function(angular, wall, moment) {

	wall.directive('message', function(){
		return {
				restict : 'EA',
				scope: {
					msg : '=',
				},
				templateUrl: 'assets/js/wall/directive/message.html',
				controller: 'messageController'
		};
	});

	
	wall.filter('postTime', function(){
		return function(d) {
			var output;
			return moment(d).format('MMM DD h:mA');
		}
	});


	wall.filter('stripHtml',function() {
		return function strip(html)
				{
				   var tmp = document.createElement("DIV");
				   tmp.innerHTML = html;
				   var stripped = tmp.textContent || tmp.innerText || "";
				   return stripped.substring(1, 200) + '...';
				};
	} );



	wall.controller('messageController', function($scope, $uibModal, postFactory){

		init()
		function init(){
			
		}


		$scope.getFirstImageSrc = function(html){
			var div = document.createElement('div');
			div.innerHTML = html;
			var firstImage = div.getElementsByTagName('img')[0]
			var imgSrc = firstImage ? firstImage.src : "";
			return imgSrc;
			//var rawImgSrc = firstImage ? firstImage.getAttribute("src") : "";
		}


	    $scope.slickConfig= {
	      method: {},

       		 dots: true,
	      infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
	      responsive: [
	        {
	          breakpoint: 1024,
	          settings: {
	            slidesToShow: 3,
	            slidesToScroll: 3,
	            infinite: true,
	            dots: true
	          }
	        },
	        {
	          breakpoint: 600,
	          settings: {
	            slidesToShow: 2,
	            slidesToScroll: 2
	          }
	        },
	        {
	          breakpoint: 480,
	          settings: {
	            slidesToShow: 1,
	            slidesToScroll: 1
	          }
	        }
	      ]
	    };



		$scope.showCarousal = function (msg, file) {
		    var modalInstance = $uibModal.open({
		      animation: $scope.animationsEnabled,
		      templateUrl: 'myModalContent.html',
		      controller: function($scope, $location){ 
		      	$scope.msg = msg;
		      	$scope.file = file;
		      	var path = $location.$$protocol + "://" + $location.$$host + ":" + $location.$$port;
		      	$scope.pdfUrl = path + '/api/img/download/thumbnail/' + file.fileid ;
		      	console.log($scope.pdfUrl);
		      	$scope.ok = function(){$uibModalInstance.close();}
		      	$scope.cancel = function(){$uibModalInstance.dismiss();}
		      	$scope.pdfViewer = (file.type==='pdf');

		      	$scope.slickConfig= {
				      	method: {},
						dots: true,
						infinite: false,
						speed: 300,
						slidesToShow: 1,
						slidesToScroll: 1,
						arrows: true,
						responsive: [
						{
						  breakpoint: 1024,
						  settings: {
						    slidesToShow: 3,
						    slidesToScroll: 3,
						    infinite: true,
						    dots: true
						  }
						},
						{
						  breakpoint: 600,
						  settings: {
						    slidesToShow: 2,
						    slidesToScroll: 2
						  }
						},
						{
						  breakpoint: 480,
						  settings: {
						    slidesToShow: 1,
						    slidesToScroll: 1
						  }
						}
						]
						};




		      },
		      size: 'lg',
		      resolve: {
		    	
		      }
		    });

		    modalInstance.result.then(function () {
		      console.log('Modal oked at: ' + new Date());
		    }, function () {
		      console.log('Modal dismissed at: ' + new Date());
		    });
		  };



	});




});