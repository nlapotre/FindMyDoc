const express = require('express');
const doctorCtrl = require ('./routes/doctorCtrl');

exports.router = (function(){
  var apiRouter = express.Router();

  apiRouter.route('/doctor/register/').post(doctorCtrl.register);
  apiRouter.route('/doctor/login/').post(doctorCtrl.login);

  return apiRouter;
})();
