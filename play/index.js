// var createBear = require('./bear');

// var bear = createBear({ type: 'grizly' });

// bear.growls().walks().sleeps();

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected!');
});


var personSchema = new Schema({
	_id : Number,
	name: String,
	age: Number,
	stories : [{type: Schema.Types.ObjectId, ref: 'Story'}]
});

var storySchema = new Schema({
	_creator: {type: Number, ref: 'Person'},
	title: String,
	fans: [{type: Number, ref: 'Person'}]
});

var Person = mongoose.model('Person', personSchema);
var Story = mongoose.model('Story', storySchema);

// var ram = new Person({_id: 2, name:'Rambabu Ravuri', age:38});

// ram.save(function(err){
// 	if (err) return ;

// 	var story1 = new Story({
// 		title: 'Bodybuilding 104',
// 		_creator: ram._id
// 	});

// 	story1.save(function(err){
// 		if (err) {
// 			console.log(err);
// 		}
// 	});

// 	ram.stories.push(story1);
// 	ram.save(function(err){
// 		if (err) console.log(err);
// 	});
// });


var findRam = Person.findOne({ name: 'Rambabu Ravuri'}).populate('stories').exec(function(err, p) {
	if (err) {
		console.log(err); return;
	}

	console.log(p);
});


var story = Story.findOne( { title: /Body Building/} ).populate('_creator').populate('')