const passport = require('passport'), 
TwitterStrategy = require('passport-twitter').Strategy;
const keys =require('../keys.js');

const { twitter: {key, secret }} = keys;

passport.use(new TwitterStrategy({
    consumerKey: key,
    consumerSecret: secret,
    callbackURL: "http://localhost:4000/api/auth/twitter/callback"
  },
   (token, tokenSecret, profile, done) => {
        
       console.log(profile)
  
  }
));
