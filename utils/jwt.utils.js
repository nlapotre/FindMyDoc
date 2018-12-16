const jwt = require('jsonwebtoken');

const JWT_SIGN = 'aaaa4444'
module.exports = {
  generateToken: (userData) => {
    return jwt.sign({
      userId: userData.id,
    },
    JWT_SIGN,
  {
    expiresIn: '1h'
  })
  }
}
