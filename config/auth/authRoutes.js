const express = require('express');
const router = express();
const passport = require('passport');

// AUTHENTICAITON w/ GOOGLE 
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

// CALLBACK ROUTE FOR GOOGLE REDIRECT
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    
})
module.exports = router;