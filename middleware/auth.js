const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // does not exist

  if (!token) {
    return res.status(401).json({ msg: 'No token, Authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded.jwtoken;
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token no valid' });
  }
};
