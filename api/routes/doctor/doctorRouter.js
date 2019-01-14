const express = require('express');
const doctorCtrl = require ('./doctorCtrl');

exports.router = ( () =>{
  var doctorRouter = express.Router();

  doctorRouter.route('/register/').post(doctorCtrl.register);
  doctorRouter.route('/login/').post(doctorCtrl.login);
  doctorRouter.route('/infos/').get(doctorCtrl.getDoctorInfos);
  doctorRouter.route('/all/').get(doctorCtrl.getDoctors);

  return doctorRouter;

} )();
