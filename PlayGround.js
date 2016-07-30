var express  = require('express');
var app      = express();                               // create our app w/ express
var mongoose = require('mongoose');                     // mongoose for mongodb
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var _ = require('lodash');
var database = require('./config/database');


// configuration =================
app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());


var mongoose = require('mongoose');
mongoose.connect(database.url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected!');
});


var router = express.Router();
router.use(function(req, res, next) {
	console.log('Request received for: ' + req.url);
	next();
});

router.get('/', function(req, res){
	res.json({message: 'Congrats!! you are htting trainmoo api'});
});

app.use('/api', router);

require('./app/controllers/controllers')(router);



var Class = require('./app/models/class').Class;
var Event = require('./app/models/event').Event

// var clazzes = Class.find({}).populate('teachers').exec(function(err, c) {
// 	console.log(c[0].teachers);
// });

// var eventJson = {
// 	trainerid: '57610b8a3f95d8f685f197a8',
// 	classid: '57830905568adab2e6ab3fab',
// 	title: 'Training Sessions',
// 	details: 'Regular Training sessions involving hardcore training',
// 	type: "training",
// 	eventTime: {
// 		start: "2016-07-11T02:48:37.774Z",
// 		end: "2016-07-11T04:48:37.774Z"
// 	},
// 	eventDate: {
// 		start: "2016-07-11T02:48:37.774Z",
// 		end: "2016-07-11T04:48:37.774Z"
// 	},

// 	repeat: false
// };

// Event.create(eventJson, function(err, e) {
// 	if (err) {console.log(err)}
// 		else {
// 			console.log('Event created successfully');
// 		}
// })
var classJson = {
	classid: "CLS2015USR1BB11",
	title: "BodyBuilding 101",
	summary: "Body building 101",
	prerequisites: "Must be in bad shape",
	details: "become super human",
	location: "Bellandur",
	zipcode: "560103",
	city: "Bangalore",
	teachers: ['57610b8a3f95d8f685f197a8'],
	categories: ["bodybuilding", "fitness"],
	trainingStyle: ["Personal"],
	status: "In Progress",
	capacity: 30,
	registered: 10,
	price: 3000,
	noOfSessions: 10
};

Class.create(classJson, function(err, clazz){
					if (err) { 
						console.log('Could not create class: ' + err);
						
					}
					else { 
						console.log({message: 'Class is Created Successfully'}); 
					}
				}); 



// var moment = require('moment');

// var event = {
// 	title: "Bootcamp 101",
// 	repeat: true,
// 	frequency: 'weekly',
// 	eventTime : {
// 		start: '1900-01-01T10:00:00:000Z',
// 		end: '1900-01-01T16:00:00:000Z'
// 	},
// 	eventDate: {
// 		start: '2016-07-15T00:00:00',
// 		end: '2016-07-19T00:00:00',
// 	},
// 	days: ['monday', 'wednesday', 'friday']
// };


// var eventsOnCalendar = createSchedule(event);
// console.log(eventsOnCalendar);


// function createSchedule(event) {

// 	var eventsOnScheduler = [];

// 	var startDate = moment(event.eventDate.start);
// 	var endDate = moment(event.eventDate.end);
// 	var noOfDays = endDate.diff(startDate, 'days') + 1;
// 	console.log(noOfDays);

// 	var startTime = moment(event.eventTime.start);
// 	var endTime = moment(event.eventTime.end);

// 	if (event.repeat) {

// 		var duration = moment.duration(endTime.diff(startTime)).humanize();

// 		for (var day = 0; (day < noOfDays) ; day++) {
// 			var currDate = startDate.clone().add(day, 'days');
// 			if (event.frequency === "weekly" && event.days != 'undefined' && event.days.length > 0 ) {
// 				var weekday = currDate.format('dddd').toLowerCase();
// 				if (event.days.indexOf(weekday) < 0) {
// 					continue;
// 				}
// 			}

// 			var eventStart = currDate.clone();
// 			var eventEnd = currDate.clone();
// 			eventStart.set({ 'hour': startTime.hours(),'minute': startTime.minutes()});
// 			eventEnd.set({ 'hour': endTime.hours(),'minute': endTime.minutes()});			

// 			var newEvent = {
// 				title: event.title,
// 				startsAt: eventStart.toDate(),
// 				endsAt: eventEnd.toDate(),
// 				duration: duration
// 			}
// 			eventsOnScheduler.push(newEvent);

// 		}

// 	}	
// 	else {

// 			var eventStart = startDate.clone();
// 			var eventEnd = endDate.clone();
// 			eventStart.set({ 'hour': startTime.hours(),'minute': startTime.minutes()});
// 			eventEnd.set({ 'hour': endTime.hours(),'minute': endTime.minutes()});			
		
// 			var duration = moment.duration(eventEnd.diff(eventStart)).humanize();

// 			var newEvent = {
// 				title: event.title,
// 				startsAt: eventStart.toDate(),
// 				endsAt: eventEnd.toDate(),
// 				duration: duration
// 			}
// 			eventsOnScheduler.push(newEvent);

// 	}

// 	return eventsOnScheduler;
// }