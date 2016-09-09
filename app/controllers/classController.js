"use strict";
var Class = require('../models/class').Class;
var mongoose = require('mongoose');

module.exports = function(router) {

	router.route('/programs')
		  .get(function(req, res){
		  	Class.find( { programid: null } ).populate('teachers').exec(function(err, classes){
			  		if (err) {
			  			console.log(err);
			  			res.send(err);
			  		} else {
			  			res.json(classes);
			  		}
			  	});
		  });

	router.route('/program/:programid/classes')
		  .get(function(req, res){
		  	Class.find( { programid : mongoose.Types.ObjectId(req.params.programid) } ).exec(function(err, classes){
			  		if (err) {
			  			console.log(err);
			  			res.send(err);
			  		} else {
			  			res.json(classes);
			  		}
			  	});
		  });

	router.route('/classes')
		  .post(function(req, res){
		  		var classJson = req.body;
				
				Class.create(classJson, function(err, clazz){
					if (err) { 
						console.log(err);
						res.status(500).send(err);
					}
					else { 
						res.send({message: 'Class is Created Successfully'}); 
					}
				}); 
		  });

	router.route('/class')
		  .put(function(req, res){

		  	debugger;
		  	var newClazz = req.body;

		  	console.log('Received update request: ' + newClazz);

		  	Class.findById( newClazz._id , function(err, clazz){
		  		if (err) {
		  			res.send(err);
		  		}
		  		else {

		  			clazz.name = newClazz.name;
		  			clazz.classid = newClazz.classid;
		  			clazz.summary = newClazz.summary;
		  			clazz.details = newClazz.details;
		  			clazz.address = newClazz.address;
		  			clazz.zipcode = newClazz.zipcode;
		  			clazz.city = newClazz.city;
		  			clazz.teachers = newClazz.teachers;
		  			clazz.categories = newClazz.categories;
		  			clazz.trainingstyle = newClazz.trainingstyle;
		  			clazz.status = newClazz.status;
		  			clazz.capacity = newClazz.capacity;
		  			clazz.price = newClazz.price;
		  			clazz.start = newClazz.start;
		  			clazz.end = newClazz.end;
		  			clazz.requirements = newClazz.requirements;

		  			clazz.save(function(err, c) {
		  				if (err) {
		  					res.send(err);
		  				}else {
		  					res.json('Class updated Successfully');
		  				}
		  			});
		  		}
		  	});
		  });

	router.route('/class/:classid')
		  .get(function(req, res){
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