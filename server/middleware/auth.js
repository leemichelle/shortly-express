const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
  // req.cookies;
  // req.session;
  req.session = req.cookies;
  console.log(req);
  // models.compare(attempt, passw, salt)
  
  // console.log('response', res);
  // console.log('session', req.session);
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

