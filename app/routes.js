var Profile = require('./models/profile');

module.exports = function(app) {

	app.put('/api/profiles', function(req, res){
		console.log('Posting profile');
		var profile = {
			name: req.body.name,
			specialization: req.body.specialization
		};

		console.log('Looking for name: ' + profile.name);
		var index = _.findIndex(profiles, function(p) { 
			console.log(p.name);
			return p.name === profile.name;
		});
		console.log('Updating profile index: ' + index);
		if (index < 0) return;
		profiles[index].specialization = profile.specialization;
		res.send('ok');
	});


	app.post('/api/profiles', function(req, res){
		console.log('Posting profile');
		var profile = new Profile({
			name: req.body.name,
			specialization: req.body.specialization
		});

		profile.save(function(err){if (err) return console.log(err);});
		res.redirect('/');
	});

	app.get('/api/profiles', function(req, res){
		console.log('Request for profiles');

		Profile.find(function(err, profiles){
			if (err) return console.error(err);
			res.setHeader('Content-Type', 'application/json');
			var json =JSON.stringify(profiles, null, 3);
			console.log(json);
	    	res.send(json);
		});
		
	});

	app.get('/profile', function(req, res) {
		console.log('Got it - ' + req.url);
	    res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});

}