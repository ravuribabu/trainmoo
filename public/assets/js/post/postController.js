define(['angular', './post', 'moment', 'utils'], function(angular, post, moment, utils) {

	post.directive('post', function(){
		return {
				restict : 'EA',
				scope: {
					messages : '=',
				},
				templateUrl: 'assets/js/post/post.html',
				controller: 'postController'
		};
	});

	post.config(['flowFactoryProvider', function (flowFactoryProvider) {
			  flowFactoryProvider.defaults = {
			    target: 'api/img/upload/',
			    permanentErrors: [404, 500, 501],
			    maxChunkRetries: 2,
			    chunkRetryInterval: 5000,
			    simultaneousUploads: 1,
			    uploadMethod: 'POST'
			  };
			}]);


	post.controller('postController', function($scope, postFactory, SweetAlert){

		var count = 1;

		$scope.obj = {};

		$scope.userid = '57610b8a3f95d8f685f197a8';
		$scope.username = 'Rambabu Ravuri';
		$scope.classid = '5783c3bba53bba2bed66e7d5';
		$scope.classname = 'Bodybuilding 101';

		$scope.post = {
			author: {
				id: $scope.userid,
				name: $scope.username
			},
			class: {
				id: $scope.classid,
				name: $scope.classname
			},
			files: [],
			likes: [],
			comments: 0,
		};

		init()
		function init(){
			
			$scope.uploadFile = false; 
			$scope.uploadImage = false;


			$scope.cancelUpload = function(){
				$scope.uploadFile = false; 
				$scope.uploadImage = false;
				$scope.obj.flowFiles.cancel();
				$scope.obj.flowImages.cancel();
			}


			$scope.uploadImages = function (){
				$scope.uploadFile = false; 
				$scope.uploadImage = true;
				$scope.obj.flowFiles.cancel();
			}

			$scope.uploadFiles = function(){
				$scope.uploadFile = true; 
				$scope.uploadImage = false;
				$scope.obj.flowImages.cancel();
			}

			$scope.fileSuccess = function($file, $message, $flow ) {
				//$flow.cancel();
			}

			$scope.fileError = function($file, $message, $flow ) {
				SweetAlert.swal($message);
			}


			$scope.form = new utils.AppForm(angular, function(form){
				
				var flowObj;
				if ($scope.uploadFile) {
					flowObj = $scope.obj.flowFiles;
				}
				if ($scope.uploadImage) {
					flowObj = $scope.obj.flowImages;
				}

				if (flowObj && flowObj.files.length > 0) {
					_.forEach(flowObj.files, function(file, index) {

						var file = {
							fileid : file.uniqueIdentifier,
							fileName: file.name,
							size: file.size,
							type: file.name.split('.').pop().toLowerCase()
						}

						$scope.post.files.push(file);
					});
					flowObj.upload();
					$scope.uploadFile = false;
					$scope.uploadImage = false;
				}

				$scope.post.type = 'comment';

				postFactory.createPost($scope.post)
							.success(function(data){
								
								SweetAlert.swal({
						            title: "Post Created!",
						            text: "Congratulations, your message is posted successfully!",
						            type: "success",
						            confirmButtonColor: "#007AFF"
						        });

								$scope.post = {
												author: {
													id: $scope.userid,
													name: $scope.username
												},
												class: {
													id: $scope.classid,
													name: $scope.classname
												},
												files: [],
												likes: [],
												comments: 0,
											};
							})
							.error(function(err){
								console.log(err);
							});
			} );

		} //END INIT
	});
});