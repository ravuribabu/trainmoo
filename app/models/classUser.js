var mongoose = require('mongoose');
var Schedule = require('./event').Event
var User = require('./user').User
var Schema = mongoose.Schema;


var ClassUserSchema = new Schema({
  
  class: {
    id: {type:Schema.Types.ObjectId, ref: 'Class', required: true },
    name: { type: String, required: true }, 
  },
  credential: {
    id: {type:Schema.Types.ObjectId, ref: 'UserCredential'},
    name: { type: String}, 
  },
  status: { type: String, enum: ['active', 'suspended']} ,
  payment: { type: String, enum: ['pending', 'partial', 'completed']} ,
  type: { type: String, enum: ['teacher', 'student', 'parent', 'admin'], required: true} ,
  created_at: Date,
  updated_at: Date,
  email: String,
  firstname: String,
  lastname: String
});

// on every save, add the date
ClassUserSchema.pre('save', function(next) {
  var currentDate = new Date();
  this.updated_at = currentDate;
  if (!this.created_at)
    this.created_at = currentDate;

  next();

});

var ClassUser = mongoose.model('ClassUser', ClassUserSchema);
module.exports = {
  ClassUser: ClassUser,
  ClassUserSchema: ClassUserSchema
};