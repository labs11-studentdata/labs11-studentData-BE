const jwt = require('jsonwebtoken');

module.exports={ restricted, checkRole };

function restricted(req, res, next){
  const token = req.headers.authorization;

  if (token) {
    // is it valid?
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        // record the event
        res.status(401).json({ message: "can't touch this!" });
      } else {
        req.decodedJwt = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({ message: 'shall not pass!' });
  }
};

function checkRole(role) {
    return function(req, res, next) {
        if (req.decodedJwt.roles && req.decodedJwt.roles.includes(role)) {
            next();
        } else {
            res.status(403).json({ you: 'you have no power here!' });
        }
    }
};

