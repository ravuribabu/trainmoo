var mongoose = require('mongoose');
var Schedule = require('./event').Event
var User = require('./user').User
var Schema = mongoose.Schema;

var ClassSchema = new Schema({
  
  classid: { type: String, required: true, unique: true },

  title: { type: String, required: true },
  summary: { type: String, required: true },
  requirements: String,
  details: String,
  address: String, 
  zipcode: Number, 
  city: String,
  teachers: [{type:Schema.Types.ObjectId, ref: 'User'}],
  categories: [String],
  trainingstyle: [{
                    type: String,
                    enum: ['In class', 'Online', 'Personal']
                  } ],
  status: String,
  capacity: Number,
  registered: Number,
  cost: Number,
  noOfSessions: Number,
  // events: [{type: Schema.Types.ObjectId, ref: 'Event'}}],
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