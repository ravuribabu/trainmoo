"use strict";
var ClassUser = require('../models/classUser').ClassUser;
var mongoose = require('mongoose');

module.exports = function(router) {

	router.route('/class/:classid/users')
		  .get(function(req, res){
		  	ClassUser.find( { 'class.id' : mongoose.Types.ObjectId(req.params.classid) } ).exec(function(err, users){
			  		if (err) {
			  			console.log(err);
			  			res.send(err); 
			  		} else {
			  			res.json(users);
			  		}
			  	});
		  }).post(function(req, res){
		  		var userRequest = req.body;
				
				ClassUser.create(userRequest, function(err, user){
					if (err) { 
						console.log(err);
						res.status(500).send(err);
					}
					else { 
						res.send({message: 'User is Created Successfully'}); 
					}
				}); 
		  }).put(function(req, res){

		  	var userRequest = req.body;

		  	ClassUser.findById( userRequest._id , function(err, user){
		  		if (err) {
		  			res.send(err);
		  		}
		  		else {
		  			user.firstname = userRequest.firstname;
		  			user.lastname = userRequest.lastname;
		  			user.email = userRequest.email;
		  			user.status = userRequest.status;
		  			user.payment = userRequest.payment;

		  			user.save(function(err, c) {
		  				if (err) {
		  					res.send(err);
		  				}else {
		  					res.json('User updated Successfully');
		  				}
		  			});
		  		}
		  	});
		  });
	
};