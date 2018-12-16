const express = require('express');
const doctorCtrl = require ('./doctorCtrl');

exports.router = ( () =>{
  var doctorRouter = express.Router();

  doctorRouter.route('/register/').post(doctorCtrl.register);
  doctorRouter.route('/login/').post(doctorCtrl.login);
  doctorRouter.route('/infos/').get(doctorCtrl.getDoctorInfos);

  return doctorRouter;

} )();
