"use strict";
var Class = require('../models/class').Class;

module.exports = function(router) {
	
	router.route('/classes/:userid')
			.post(function(req, res){
				var classJson = req.body;
				Class.create(classJson, function(err, clazz){
					if (err) { 
						res.status(500).send(err);
					}
					else { 
						res.send({message: 'Class is Created Successfully'}); 
					}
				}); 
			})
			.get(function(req, res) {
			  	Class.find( { teachers: req.params.userid } ).populate('teachers').exec(function(err, classes){
			  		if (err) {
			  			res.send(err);
			  		} else {
			  			res.json(classes);
			  		}
			  	});

			  });


	router.route('/class/:classid')
		  .put(function(req, res){
		  	Class.findById( req.params.classid , function(err, clazz){
		  		if (err) {
		  			res.send(err);
		  		}
		  		else {

		  			var newClazz = req.body;

		  			clazz.title = newClazz.title;
		  			clazz.classid = newClazz.classid;
		  			clazz.summary = newClazz.summary;
		  			clazz.requirements = newClazz.requirements;
		  			clazz.details = newClazz.details;
		  			clazz.location = newClazz.location;
		  			clazz.zipcode = newClazz.zipcode;
		  			clazz.city = newClazz.city;
		  			clazz.teachers = newClazz.teachers;
		  			clazz.categories = newClazz.categories;
		  			clazz.trainingStyle = newClazz.trainingStyle;
		  			clazz.status = newClazz.status;
		  			clazz.capacity = newClazz.capacity;
		  			clazz.registered = newClazz.registered;
		  			clazz.price = newClazz.price;
		  			clazz.noOfSessions = newClazz.noOfSessions;

		  			clazz.save(function(err, c) {
		  				if (err) {
		  					res.send(err);
		  				}else {
		  					res.json('Class updated Successfully');
		  				}
		  			});

		  			
		  		}
		  	});
		  })
		  .get(function(req, res) {
		  	Class.findById( req.params.classid , function(err, clazz) {
		  		if (err) {
		  			res.send(err);
		  		}
		  		else {
		  			res.json(clazz);
		  		}
		  	});
		  });		
};