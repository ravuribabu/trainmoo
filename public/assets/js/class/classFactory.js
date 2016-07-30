define(['angular', './class'], function(angular, classModule) {

'use strict';
	
		classModule.factory('classFactory', function($http, SweetAlert){

		
		return {
			getClasses: function(userid) {
				 return $http.get('api/classes/' + userid);
			},
			getClass: function(classid) {
				return $http.get('api/class/' + classid);
			},
			updateClass: function(classid, clazz) {
				return $http.put('api/class/' + classid, clazz);
			},
			createClass: function(userid, clazz) {
				return $http.post('api/classes/' + userid, clazz);
			},

			getEvents:function(classid) {
				return $http.get('api/class/' + classid + "/events");
			},
			createEvent:function(classid, event) {
				return $http.post('api/class/' + classid + "/events", event);
			},
			getEvent: function(eventid) {
				return $http.get('api/event/' + eventid);
			},
			updateEvent: function(event) {
				return $http.put('api/event/' + event._id, event);
			},
			removeEvent: function(eventid) {
				return $http.delete('api/event/' + eventid);
			},

		};

	});
});