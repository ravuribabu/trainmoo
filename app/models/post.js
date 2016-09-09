var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({	
	discussion_id: {type:Schema.Types.ObjectId, ref: 'Post'},

	title: String,
	type: { type: String, enum: ['comment','blog', 'notification', 'assignment', 'newsletter']},
	author : {
		id: {type:Schema.Types.ObjectId, ref: 'User'},
		name: String
	},
	classes : [String],
	likes: [ {
		id: {type:Schema.Types.ObjectId, ref: 'User'},
		name: String
		}],
	noOfReplies: Number,
	parentid: {type:Schema.Types.ObjectId, ref: 'Post'},
	files: [ {
		fileid: {type:String}, 
		fileName: {type:String},
		size: Number,
		type: { type: String, enum: ['pdf', 'jpeg', 'jpg', 'png']},
		thumbnailid: {type:String}
	}
	],
	dueby : {type:Date},
	text: String, 
	slug: String,
	full_slug: String,
	tags: [String],

	created_at: Date,
  	updated_at: Date
});

PostSchema.pre('save', function(next) {
	console.log('Saving post text: ' + this.text);
	var currentDate = new Date();
	this.updated_at = currentDate;
	if (!this.created_at) {
		this.created_at = currentDate;
	}
	//this.discussion_id = this._id;
	next();
});


var Post = mongoose.model('Post', PostSchema);
module.exports = {
  Post : Post,
  PostSchema: PostSchema
}