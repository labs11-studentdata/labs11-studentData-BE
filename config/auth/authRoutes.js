const express = require("express");
const router = express();
const passport = require("passport");
const jwt = require("./tokenService");
const querystring = require("querystring");

// authentication with google
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"]
  })
);

// callback for google redirect
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  const token = jwt.generateToken(req.user);
  console.log(token)
  const user = req.user;
  const query = querystring.stringify({token: token});
  // const createdAt = user.created_at;
  // const date = Date(createdAt)
  res.redirect(process.env.REACT_ROOT + "/" );

  // var isoString =  createdAt.slice(0, 10) + "T" + createdAt.substring(createdAt.length + 1, createdAt.indexOf(' ')).slice(1) + "Z"
  // if (Math.floor((new Date() - new Date(isoString)) / 60000) < 2) {
  //   // NEW USER -- redirect to onboarding page
  //   console.log('blell')
  //   console.log(token);
  // } else {
  //   // RETURNING USER -- check find user type and send back to client
  //   res.redirect(process.env.REACT_ROOT + "/board/" + query);
  //   console.log('ffffff')

  // }
  
});

module.exports = router;
