const express = require('express');
const patientCtrl = require ('./patientCtrl');

exports.router = ( () =>{
  var patientRouter = express.Router();

  patientRouter.route('/register/').post(patientCtrl.register);
  patientRouter.route('/login/').post(patientCtrl.login);
  patientRouter.route('/infos/').get(patientCtrl.getPatientInfos);

  return patientRouter;

} )();
