const jwt = require('jsonwebtoken');

module.exports = {generateToken};

function generateToken(user){
    const payload = {
        subject: user.user_id
    }
    const options = {
        expiresIn: '1d'
    }

    return jwt.sign(payload, process.env.JWT_SECRECT, options)
}