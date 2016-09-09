define(['angular', '../class'], function(angular, classModule){
	classModule.directive('classesCard', function(){
		return {
			restict : 'EA',
			scope: {	
				'user' : '='
			},
			templateUrl: 'assets/js/class/directive/classesCard.html',
			controller: 'classSummaryController'
		
		};
	});
});