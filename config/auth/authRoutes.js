const express = require('express');
const router = express();
const passport = require('passport');
const jwt = require('./tokenService')
const querystring = require('querystring');
// authentication with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

// callback for google redirect 
router.get('/google/redirect', passport.authenticate('google'),  (req, res) => {
    const token =  jwt.generateToken(req.user);
    const user = req.user
    const query = querystring.stringify({
        "token": token
    })
    res.redirect('http://localhost:3000/' + query)
    console.log(token)
})

module.exports = router;