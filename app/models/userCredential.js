var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt   = require('bcrypt-nodejs');

var UserCredentialSchema = new Schema({

    name: {
        firstname: { type: String, required: true },
        lastname: { type: String, required: true },
      },
    local            : {
        email        : String,
        password     : String,
    },
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    twitter          : {
        id           : String,
        token        : String,
        displayName  : String,
        username     : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    userType: { type: String, enum: ['teacher', 'student', 'parent', 'admin'], required: true} ,

    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },

    user : {type:Schema.Types.ObjectId, ref: 'User'},

});

UserCredentialSchema.virtual('shortname').get(function(){
  return this.name.firstname + " "+ this.name.lastname.charAt(0);
});

UserCredentialSchema.set('toJSON', { getters: true, virtuals: true });


UserCredentialSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
UserCredentialSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// on every save, add the date
UserCredentialSchema.pre('save', function(next) {
  var currentDate = new Date();
  this.updated_at = currentDate;
  if (!this.created_at)
    this.created_at = currentDate;

  next();

});

var UserCredential = mongoose.model('UserCredential', UserCredentialSchema);
module.exports = {
  UserCredential : UserCredential,
  UserCredentialSchema: UserCredentialSchema
}


