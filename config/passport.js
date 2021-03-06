// load all the things we need
var LocalStrategy   = require('passport-local').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// load up the user model
var UserCredential           = require('../app/models/userCredential').UserCredential;
var configAuth = require('./auth');

// expose this function to our app using module.exports
module.exports = function(passport) {

     passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        UserCredential.findById(id, function(err, user) {
            done(err, user);
        });
    });

    passport.use('local-signup', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField : 'email',
            passwordField : 'password',
            passReqToCallback : true 
        },
        function(req, email, password, done) {

            console.log('Authenicating user' + email + ', ' + password);
            // asynchronous
            // User.findOne wont fire unless data is sent back
            process.nextTick(function() {

                UserCredential.findOne({ 'local.email' :  email }, function(err, userCredential) {
                    if (err)
                        return done(err);

                    if (userCredential) {
                        return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
                    } else {

                        var requestBody = req.body;

                        // if there is no user with that email
                        // create the user
                        var newUserCredential            = new UserCredential();

                        // set the user's local credentials
                        newUserCredential.local.email    = email;
                        newUserCredential.local.password = newUserCredential.generateHash(password);
                        newUserCredential.name = requestBody.name;
                        newUserCredential.userType = requestBody.userType;

                        // save the user
                        newUserCredential.save(function(err) {
                            if (err) {
                                console.log(err);
                                throw err;
                            }
                            return done(null, newUserCredential, req.flash('signupMessage', 'User created successfully!'));
                        });
                    }

                });    

            });

        }));




    passport.use('local-login', new LocalStrategy({
            usernameField : 'email',
            passwordField : 'password',
            passReqToCallback : true 
        },
        function(req, email, password, done) { // callback with email and password from our form

            UserCredential.findOne({ 'local.email' :  email }, function(err, user) {
                if (err)
                    return done(err);

                if (!user)
                    return done(null, false, req.flash('loginMessage', 'No user found.')); 

                if (!user.validPassword(password))
                    return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); 

                return done(null, user);
            });

        }));



    passport.use("google", new GoogleStrategy({
        clientID        : configAuth.googleAuth.clientID,
        clientSecret    : configAuth.googleAuth.clientSecret,
        callbackURL     : configAuth.googleAuth.callbackURL
    },
    function(token, refreshToken, profile, done) {

        console.log('profile id : ' + JSON.stringify(profile));
        // make the code asynchronous
        // User.findOne won't fire until we have all our data back from Google
        process.nextTick(function() {

            // try to find the user based on their google id
            UserCredential.findOne({ 'google.id' : profile.id }, function(err, user) {
                if (err)
                    return done(err);

                if (user) {

                    // if a user is found, log them in
                    return done(null, user);
                } else {
                    // if the user isnt in our database, create a new user
                    var newUser          = new UserCredential();

                    // set all of the relevant information
                    newUser.google.id    = profile.id;
                    newUser.google.token = token;
                    newUser.google.name  = profile.displayName;
                    newUser.google.email = profile.emails[0].value; // pull the first email

                    // save the user
                    newUser.save(function(err) {
                        if (err)
                            throw err;
                        return done(null, newUser);
                    });
                }
            });
        });

    }));


};

