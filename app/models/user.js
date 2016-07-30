var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//Validators
var phoneValidator = {
          validator: function(v) {
            return /\d{3}-\d{3}-\d{4}/.test(v);
          },
          message: '{VALUE} is not a valid phone number!'
        }; 
var emailValidator = {
        validator: function (email) {
           var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
           return emailRegex.test(email.text); // Assuming email has a text attribute
          }, 
        message: 'The e-mail field cannot be empty.'
};


//Schemas
var SpecializationSchema = new Schema({
    name: { type: String, required: true } ,
    details: { type: String, required: true } 
});

var CertificationSchema = new Schema({
    name: String,
    details: String
  });


var ExperienceSchema = new Schema({
    title: String,
    details: String,
    startDate: Date,
    endDate: Date,
    current: Boolean
  });

var EducationSchema= new Schema({
    name: String,
    details: String,
    startDate: Date,
    endDate: Date,
    current: Boolean
  });

var SocialSchema = new Schema({
    socialApp: {
      type: String,
      enum: ['google', 'facebook', 'linkedin', 'instagram', 'youtube']
    },
    handle: String,
    publish: Boolean
  });

var UserSchema = new Schema({
  
  name: {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
  },
  title: { type: String, required: true },
  motto: String,
  dob: { type: Date, required: false },
  phone: {
    type: Number, required: true
  },
  email: {
    type: String, required: true
  },
  gender: {
    type: String, 
    enum: ['male', 'female']
  },
  summary: String,
  address: String,
  city: String, zipcode: Number,
  isTeacher: { type: Boolean, default: false } ,
  pictureUrl: String,
  verified: Boolean,

  userid: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  
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

UserSchema.virtual('shortname').get(function(){
  return this.name.firstname + " "+ this.name.lastname.charAt(0);
});

UserSchema.set('toJSON', { getters: true, virtuals: true });

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


