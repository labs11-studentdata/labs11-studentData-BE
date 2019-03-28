const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const users = require("./usersModel");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await users.findUser(id)
    done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      // options for strategy
      callbackURL: process.env.GOOGLE_REDIRECT,
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    },
    async (accessToken, refreshToken, profile, done) => {
      const currentUser = await users.findAuthId(profile.id);
    //   check if user is currently in db
      if (currentUser) {
        console.log("user in system");
        console.log(currentUser)
        done(null, currentUser, { message: 'user in system' });
      } else {
        //   create new user if user is not in db
        const user = {
          auth_id: profile.id,
          first_name: profile.name.givenName,
          last_name: profile.name.familyName
        };
        const newUser = await users.addUser(user);
        done(null, newUser), { message: 'new user' };
      }
    }
  )
);
