define(['angular', '../class', './classScheduleController'], function(angular, classModule){
	classModule.directive('classSchedule', function(){
		return {
			restict : 'EA',
			scope: {
				
			},
			templateUrl: 'assets/js/class/directive/classSchedule.html',
			controller: 'classScheduleController'
		
		};
	});
});