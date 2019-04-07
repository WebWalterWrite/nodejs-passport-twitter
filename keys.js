require("dotenv").config();
keys = {
    twitter:{
        key: process.env.TWITTER_KEY,
        secret: process.env.TWITTER_SECRET
    },
    session: {key:process.env.SESSION_KEY}
};

module.exports= keys;