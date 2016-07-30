var User = require('../models/user').User;
module.exports = function(router) {
	router.route('/users')
			.post(function(req, res){

				console.log("POST USERS");

				var userJson = req.body;
				console.log(userJson);
				User.create(userJson, function(err, user){
					if (err) { 
						console.log('Could not create user: ' + err);
						res.status(500).send(err);
					}
					else { 
						res.send({message: 'User Created Successfully'}); 
					}
				}); 
			})
			
			.get(function(req, res){
				console.log("GET USERS");
				User.find(function(err, users){
					if (err) {
						res.send(err);
					}
					else { 
						res.json(users); 
					}
				});
			});

	router.route('/users/:user_id')
		  .get(function(req, res) {
		  	User.findById(req.params.user_id, function(err, user){
		  		if (err) {
		  			res.send(err);
		  		} else {
		  			res.json(user);
		  		}
		  	});

		  })
		  .put(function(req, res) {
			User.findById(req.params.user_id, function(err, user){
					  		if (err) {
					  			res.send(err);
					  		} else {
					  			var newUser = req.body;
					  			user.name = newUser.name;
					  			user.city = newUser.city;
					  			user.current = newUser.current;
					  			user.email = newUser.email;
					  			user.experience = newUser.experience;
					  			user.isTeacher = newUser.isTeacher;
					  			user.password = newUser.password;
					  			user.phone = newUser.phone;
					  			user.social = newUser.social;
					  			user.specializations = newUser.specializations;
					  			user.title = newUser.title;
					  			user.trainingStyle = newUser.trainingStyle;
					  			user.userid = newUser.userid;
					  			user.zipcode = newUser.zipcode;
					  			user.certifications = newUser.certifications;
					  			user.summary = newUser.summary;
					  			user.address = newUser.address;

					  			user.save(function(err){
					  				if (err){
					  					res.send(err);
					  				} else {
					  					res.send("User updated sucessfully")
					  				}
					  			});
					  		}
					  	});
		  })
		  .delete(function(req, res){
		  	
		  });
};