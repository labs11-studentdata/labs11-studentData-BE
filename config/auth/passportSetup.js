const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const users = require("./usersModel");

passport.serializeUser((user, done) => {
  console.log(user)
  done(null, user.userID);
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
      console.log(profile)
    //   check if user is currently in db
      if (currentUser) {
        done(null, currentUser, { message: 'user in system' });
      } else {
        //   create new user if user is not in db
        const user = {
          authID: profile.id,
          first_name: profile.name.givenName,
          last_name: profile.name.familyName
        };
        const newUser = await users.addUser(user);
        done(null, newUser), { message: 'new user' };
      }
    }
  )
);
