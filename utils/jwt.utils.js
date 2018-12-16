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
},
parseAuthorization: (authorization) => {
  return (authorization != null) ? authorization.replace('Bearer ', '') : null;
},
getUserId: (authorization) => {
  var userId = -1;
  var parsedToken = module.exports.parseAuthorization(authorization);
  if(parsedToken != null) {
    try{
      var token = jwt.verify(parsedToken, JWT_SIGN);
      if(token != null){
        userId = token.userId;
      }
    }catch(err) { }
    }

  return userId;
}

}
