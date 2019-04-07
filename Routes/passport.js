const router = require('./config.js');
const passport = require('passport');

router.get("/auth/twitter", passport.authenticate("twitter"));

router.get("/auth/twitter/callback",passport.authenticate("twitter", {
    successRedirect: "/",
    failureRedirect: "/login"
  })
);

module.exports = router;