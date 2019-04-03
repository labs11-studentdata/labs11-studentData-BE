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
  const user = req.user;
  console.log(user)
  const query = querystring.stringify({token: token, user_id: user.id, account_type: user.account_type, schoolID: user.schoolID });
  const created_at = user["created_at"]
  // const date = Date(createdAt)
  if(user.account_type === null) {
    res.redirect(`${process.env.REACT_ROOT}/onboarding/${query}`);
    console.log('blejj')
  } else {
    console.log("returning")
    res.redirect(`${process.env.REACT_ROOT}/${query}`)
  }
  // if (Math.floor((new Date() - new Date(isoString)) / 60000) < 2) {

  //   const isoString =  created_at.slice(0, 10) + "T" + created_at.substring(created_at.length + 1, created_at.indexOf(' ')).slice(1) + "Z"
  //   console.log(isoString)
  //   // res.redirect(process.env.REACT_ROOT + "/board/" + query);

  //   // NEW USER -- redirect to onboarding page
  //   // console.log('blell')
  //   // console.log(token);
  // } else {
  //   // RETURNING USER -- check find user type and send back to client
  //   // console.log('ffffff')

  // }
  
});


module.exports = router;
