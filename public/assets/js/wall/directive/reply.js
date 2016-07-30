define(['angular', '../wall', 'moment','utils'], function(angular, wall, moment, utils) {

	wall.directive('reply', function(){
		return {
				restict : 'EA',
				scope: {
					msg : '=',
				},
				templateUrl: 'assets/js/wall/directive/reply.html',
				controller: 'replyController'
		};
	});


	wall.controller('replyController', function($scope, postFactory, SweetAlert){


		var count = 1;
		init()

		$scope.showReplies = false;

		$scope.newReply = {
					id: count,
					discussion_id: '1234',
					author: {name:'Rambabu Ravuri'},
					class: {name: 'Bodybuilding 101'},
					likes: 0,
					comemnts: 0
				};

		$scope.replies = [];

		$scope.like = function() {
			var alreadyLiked = _.find($scope.msg.likes, function(l) { return l.id === '57610b8a3f95d8f685f197a8' ;});

			if (!alreadyLiked) {
				$scope.msg.likes.push( {id: '57610b8a3f95d8f685f197a8', name:'Rambabu Ravuri' } );
			}
		}
				
		function init(){

			$scope.userid = '57610b8a3f95d8f685f197a8';
			$scope.username = 'Rambabu Ravuri';
			$scope.classid = '5783c3bba53bba2bed66e7d5';
			$scope.classname = 'Bodybuilding 101';
			$scope.parent_id = $scope.msg._id;


			postFactory.getReplies($scope.msg._id)
						.success(function(data){
							$scope.replies = data;
						})
						.error(function(err){
							console.log(err);
						});
			$scope.post = {
				discussion_id: $scope.parent_id,
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
				comments: 0
			};
				
			$scope.form = new utils.AppForm(angular, function(form){
					
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
													discussion_id: $scope.parent_id,
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


		}
	});
});