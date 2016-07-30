"use strict";
var Post = require('../models/post').Post;
var Jimp = require("jimp");
var flow = require('./flowPersister.js')('tmp');
var _ = require('lodash');

module.exports = function(router) {
	

	router.route('/replies/:post_id')
			.get(function(req, res) {
			  	Post.find({discussion_id : req.params.post_id})
				  	.exec(function(err, posts){
				  		if (err) {
				  			console.log('error ' + err);
				  			res.send(err);
				  		} else {
				  			console.log('posts retrieved: ' + posts);
				  			res.json(posts);
				  		}
				  	});
			  });




	router.route('/posts/:user_id')
			.post(function(req, res){
				var postJson = req.body;
				Post.create(postJson, function(err, event){
					if (err) { 
						console.log('Could not create post: ' + err);
						res.status(500).send(err);
					}
					else { 
						res.send({message: 'Post is Created Successfully'}); 
			
						//Create Thumbnail.
						
						
					}
				}); 
			})
			.get(function(req, res) {
			  	Post.find({})
				  	.exec(function(err, posts){
				  		if (err) {
				  			console.log('error ' + err);
				  			res.send(err);
				  		} else {
				  			console.log('posts retrieved: ' + posts);
				  			res.json(posts);
				  		}
				  	});
			  });


	router.route('/post/:postid')
			.get(function(req, res) {
			  	Post.findById(req.params.postid, function(err, post){
			  		if (err) {
			  			res.send(err);
			  		} else {
			  			res.json(post);
			  		}
			  	});

			  });



};