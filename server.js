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
var __setOptions = mongoose.Query.prototype.setOptions;

mongoose.Query.prototype.setOptions = function(options, overwrite) {
  __setOptions.apply(this, arguments);
  if (this.options.lean == null) this.options.lean = true;
  return this;
};

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

var server = app.listen(8080);
server.timeout = 500000;
console.log('server ' + server);

console.log("App listening on port 8080");
