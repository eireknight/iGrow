var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

passport.serializeUser(function(user, done) {
    done(null, user);
   });

   passport.deserializeUser(function(user, done) {
    done(null, user);
   });

   passport.use(
    new GoogleStrategy(
     {
      clientID: "139922777483-34jphblfof3kfr0ccppc95lskoq2itof.apps.googleusercontent.com",
      clientSecret: "qgD669RdWvZsvZHpT5iQQEFj",
      callbackURL: "http://localhost:3000/auth/google/callback"
     },
     function(accessToken, refreshToken, profile, done) {
      var userData = {
       email: profile.emails[0].value,
       name: profile.displayName,
       token: accessToken
      };
      done(null, userData);
     }
    )
   );