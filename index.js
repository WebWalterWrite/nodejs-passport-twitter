const express = require('express');
const passport = require('passport');
const cookieSession = require("cookie-session");
const app = express();
const twitter = require("./Passport/twitter");
const passportRoutes = require('./Routes/passport');
const { session: { key}} = require ('./keys')

// Désactiver l’en-tête X-Powered-By.
app.disable("x-powered-by");

// set session
app.use(
  cookieSession({
    name: "twitter_user",
    keys: [key],
    httpOnly:true,
    // Cookie Options
    maxAge: 24 * 60 * 1000 // 24 min
  })
);

app.use(passport.initialize());
app.use(passport.session());
// Routing
app.use("/api", passportRoutes);

// Start server
const port = 4000 || process.env.PORT;
app.listen(port, () => console.log(`Connecté sur le port :${port}`));
