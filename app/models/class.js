var mongoose = require('mongoose');
var Schedule = require('./event').Event
var User = require('./user').User
var Schema = mongoose.Schema;

//ClassSchema will be used for programs and classes
//For Programs programid will be blank
var ClassSchema = new Schema({
  
  //programid to which class belings to 
  //If blank implies current entity represents a program
  programid: {type: Schema.Types.ObjectId, ref: 'Class'} , 
  name: { type: String, required: true },
  requirements: String,
  details: String,
  address: String, 
  zipcode: Number, 
  city: String,
  categories: [String],
  trainingstyle: [{
                    type: String,
                    enum: ['In class', 'Online', 'Personal']
                  } ],
  status: String,
  capacity: Number,
  cost: Number,
  start: Date,
  end: Date,
  noOfSessions: Number,
  created_at: Date,
  updated_at: Date
});

// on every save, add the date
ClassSchema.pre('save', function(next) {
  var currentDate = new Date();
  this.updated_at = currentDate;
  if (!this.created_at)
    this.created_at = currentDate;
  next();
});

var Class = mongoose.model('Class', ClassSchema);
module.exports = {
  Class: Class,
  ClassSchema: ClassSchema
};