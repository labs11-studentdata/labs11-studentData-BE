const express = require('express');
const router = express();
const passport = require('passport');

// authentication with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

// callback for google redirect 
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.send(req.user)
})

module.exports = router;