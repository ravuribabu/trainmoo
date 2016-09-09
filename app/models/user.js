var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Schemas

var UserSchema = new Schema({

  credential : {type:Schema.Types.ObjectId, ref: 'UserCredential'},

  title: { type: String, required: true },
  dob: { type: Date, required: false },
  phone: {
    type: Number, required: true
  },

  gender: {
    type: String,
    enum: ['male', 'female']
  },
  summary: String,
  address: String,
  city: String, zipcode: Number,
  picture:  {
    fileid: {type:String},
    fileName: {type:String},
    size: Number,
    type: { type: String, enum: [ 'jpeg', 'jpg', 'png']},
    thumbnailid: {type:String}
  },

  specializations: [String],
  certifications: [String],
  experience: Number,
  title: String,
  current: String,
  trainingStyle: [String],

  social:{
    youtube: String,
    twitter: String,
    facebook: String,
    instagram: String,
    linkedin: String,
    skype: String
  },

  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  from: Date,
  to: Date

});


// on every save, add the date
UserSchema.pre('save', function(next) {
  var currentDate = new Date();
  this.updated_at = currentDate;
  if (!this.created_at)
    this.created_at = currentDate;

  next();

});

var User = mongoose.model('User', UserSchema);
module.exports = {
  User : User,
  UserSchema: UserSchema
}
